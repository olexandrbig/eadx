"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          color: "#09090b",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ textAlign: "center", padding: "0 24px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 700 }}>
            Something went wrong
          </h1>
          <p style={{ marginTop: "16px", fontSize: "18px", color: "#52525b" }}>
            An unexpected error occurred. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "32px",
              padding: "12px 32px",
              fontSize: "16px",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: "#005774",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
