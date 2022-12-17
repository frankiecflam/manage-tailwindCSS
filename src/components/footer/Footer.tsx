import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";
import FooterSubscribe from "./FooterSubscribe";

const Footer = () => {
  return (
    <footer className="px-8 py-12 bg-darkBlue-100 grid justify-center gap-y-10 desktop:grid-cols-12 desktop:justify-between">
      <FooterSubscribe />
      <FooterNav />
      <FooterSocial />
    </footer>
  );
};

export default Footer;
