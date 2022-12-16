import HeaderNavBrand from "./HeaderNavBrand";
import HeaderNavList from "./HeaderNavList";
import HeaderNavActions from "./HeaderNavActions";

import { useState } from "react";

const HeaderNav = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <nav className="flex justify-between items-center gap-x-3">
      <HeaderNavBrand />
      <HeaderNavList showMobileNav={showMobileNav} />
      <HeaderNavActions
        showMobileNav={showMobileNav}
        onNavBtnClick={() => setShowMobileNav((prevState) => !prevState)}
      />
    </nav>
  );
};

export default HeaderNav;
