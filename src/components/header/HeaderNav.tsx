import HeaderNavBrand from "./HeaderNavBrand";
import HeaderNavList from "./HeaderNavList";
import HeaderNavActions from "./HeaderNavActions";

const HeaderNav = () => {
  return (
    <nav className="flex justify-between items-center">
      <HeaderNavBrand />
      <HeaderNavList />
      <HeaderNavActions />
    </nav>
  );
};

export default HeaderNav;
