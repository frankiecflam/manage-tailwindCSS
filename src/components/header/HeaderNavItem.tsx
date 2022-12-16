import { ReactNode } from "react";
import Link from "next/link";

interface HeaderNavItemProps {
  children: ReactNode;
  href: string;
}

const HeaderNavItem = ({ children, href }: HeaderNavItemProps) => {
  return (
    <li className="capitalize text-center">
      <Link href={href} className="text-darkBlue-default">
        {children}
      </Link>
    </li>
  );
};

export default HeaderNavItem;
