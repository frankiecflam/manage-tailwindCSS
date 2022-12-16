import HeaderNavItem from "./HeaderNavItem";

const HeaderNavList = ({ showMobileNav }: { showMobileNav: boolean }) => {
  return (
    <ul
      className={`${
        showMobileNav ? "flex" : "hidden"
      } flex-1 justify-between items-center gap-x-10 absolute top-20 left-0 w-screen h-1/2 bg-lightGray flex-col py-5 font-medium text-xl tablet:flex tablet:relative tablet:w-auto tablet:h-auto tablet:top-0 tablet:flex-row tablet:justify-center tablet:mt-0 tablet:bg-transparent tablet:py-0 tablet:font-normal tablet:text-base`}
    >
      <HeaderNavItem href="/pricing">pricing</HeaderNavItem>
      <HeaderNavItem href="/products">products</HeaderNavItem>
      <HeaderNavItem href="/about">about us</HeaderNavItem>
      <HeaderNavItem href="/careers">careers</HeaderNavItem>
      <HeaderNavItem href="/community">community</HeaderNavItem>
    </ul>
  );
};

export default HeaderNavList;
