import { HeaderClient } from "@/components/header-client";

const navigation = [
  { name: "Services", href: "/blog" },
  { name: "Company", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return <HeaderClient navigation={navigation} />;
}
