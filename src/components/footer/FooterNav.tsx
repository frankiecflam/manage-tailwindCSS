import Link from "next/link";
import { ReactNode } from "react";

export function FooterNavItem({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
}

const FooterNav = () => {
  return (
    <nav className="text-white col-span-4">
      <ul className="grid grid-cols-2 justify-between gap-y-3">
        <FooterNavItem href="/">Home</FooterNavItem>
        <FooterNavItem href="/careers">Careers</FooterNavItem>
        <FooterNavItem href="/pricing">Pricing</FooterNavItem>
        <FooterNavItem href="/Community">Community</FooterNavItem>
        <FooterNavItem href="/Products">Products</FooterNavItem>
        <FooterNavItem href="/privacy">Privacy Policy</FooterNavItem>
        <FooterNavItem href="/about">About Us</FooterNavItem>
      </ul>
    </nav>
  );
};

export default FooterNav;
