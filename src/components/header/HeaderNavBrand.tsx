import { LogoImage } from "../../assets/images";
import Image from "next/image";
import Link from "next/link";

const HeaderNavBrand = () => {
  return (
    <div className="relative w-20">
      <Link href="/">
        <Image src={LogoImage} alt="Company's Logo" />
      </Link>
    </div>
  );
};

export default HeaderNavBrand;
