import { LogoImage } from "../../assets/images";
import Image from "next/image";
import Link from "next/link";

const HeaderNavBrand = () => {
  return (
    <div className="relative">
      <Link href="/">
        <Image src={LogoImage} alt="Company's Logo" />
      </Link>
    </div>
  );
};

export default HeaderNavBrand;
