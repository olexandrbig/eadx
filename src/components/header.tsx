import { HeaderClient } from "@/components/header-client";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
  { name: "Career", href: "/career" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  return <HeaderClient navigation={navigation} />;
}
