export interface ContactFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
}

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < tokenExpiresAt) {
    return cachedToken;
  }

  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  const accountsDomain =
    process.env.ZOHO_ACCOUNTS_DOMAIN || "accounts.zoho.eu";

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("Missing Zoho OAuth credentials in environment variables");
  }

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
  });

  const res = await fetch(
    `https://${accountsDomain}/oauth/v2/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Zoho token refresh failed (${res.status}): ${text}`);
  }

  const data = await res.json();

  if (data.error) {
    throw new Error(`Zoho token error: ${data.error}`);
  }

  const token: string = data.access_token;
  cachedToken = token;
  // expires_in is in seconds; subtract 60s safety margin
  tokenExpiresAt = Date.now() + (data.expires_in - 60) * 1000;

  return token;
}

export async function createLead(formData: ContactFormData): Promise<void> {
  const apiDomain = process.env.ZOHO_API_DOMAIN || "www.zohoapis.eu";
  const accessToken = await getAccessToken();

  const leadData: Record<string, string> = {
    First_Name: formData.firstName,
    Last_Name: formData.lastName,
    Company: formData.company,
    Email: formData.email,
    Lead_Source: "Website",
  };

  if (formData.phone) {
    leadData.Phone = formData.phone;
  }
  if (formData.message) {
    leadData.Description = formData.message;
  }

  const res = await fetch(`https://${apiDomain}/crm/v7/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: [leadData] }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Zoho CRM API error (${res.status}): ${text}`);
  }

  const result = await res.json();
  const record = result.data?.[0];

  if (record?.code !== "SUCCESS") {
    throw new Error(
      `Zoho CRM lead creation failed: ${record?.message || JSON.stringify(result)}`,
    );
  }
}
