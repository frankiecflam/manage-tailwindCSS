import {
  LogoFooterImage,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PinterestIcon,
  YoutubeIcon,
} from "../../assets/images";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export function FooterSocialItem({
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

const FooterSocial = () => {
  return (
    <div className="col-span-4 flex flex-col gap-y-10 items-center">
      <ul className="flex gap-x-8">
        <FooterSocialItem href="https://www.facebook.com/">
          <Image src={FacebookIcon} alt="" />
        </FooterSocialItem>
        <FooterSocialItem href="https://www.youtube.com/">
          <Image src={YoutubeIcon} alt="" />
        </FooterSocialItem>
        <FooterSocialItem href="https://www.twitter.com/">
          <Image src={TwitterIcon} alt="" />
        </FooterSocialItem>
        <FooterSocialItem href="https://www.pinterest.com/">
          <Image src={PinterestIcon} alt="" />
        </FooterSocialItem>
        <FooterSocialItem href="https://www.instagram.com/">
          <Image src={InstagramIcon} alt="" />
        </FooterSocialItem>
      </ul>
      <Link href="/">
        <Image src={LogoFooterImage} alt="Company's Logo" />
      </Link>
    </div>
  );
};

export default FooterSocial;
