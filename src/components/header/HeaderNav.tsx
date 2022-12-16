import HeaderNavBrand from "./HeaderNavBrand";
import HeaderNavList from "./HeaderNavList";
import HeaderNavActions from "./HeaderNavActions";

const HeaderNav = () => {
  return (
    <nav className="flex justify-between">
      <HeaderNavBrand />
      <HeaderNavList />
      <HeaderNavActions />
    </nav>
  );
};

export default HeaderNav;
