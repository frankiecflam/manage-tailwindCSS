import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  return (
    <footer className="px-8 pt-12 pb-24 bg-darkBlue-100 grid justify-center gap-y-10 desktop:grid-cols-12 desktop:justify-between relative">
      <FooterSubscribe />
      <FooterNav />
      <FooterSocial />
    </footer>
  );
};

export default Footer;
