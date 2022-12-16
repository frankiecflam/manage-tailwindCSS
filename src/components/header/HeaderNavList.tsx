import HeaderNavItem from "./HeaderNavItem";

const HeaderNavList = () => {
  return (
    <ul className="flex flex-1 justify-between items-center gap-x-10 absolute w-screen h-1/2 bg-lightGray mt-20 flex-col py-5 font-medium text-xl mobile:relative mobile:w-auto mobile:h-auto mobile:flex-row mobile:justify-center mobile:mt-0 mobile:bg-transparent mobile:py-0 mobile:font-normal mobile:text-base">
      <HeaderNavItem href="/pricing">pricing</HeaderNavItem>
      <HeaderNavItem href="/products">products</HeaderNavItem>
      <HeaderNavItem href="/about">about us</HeaderNavItem>
      <HeaderNavItem href="/careers">careers</HeaderNavItem>
      <HeaderNavItem href="/community">community</HeaderNavItem>
    </ul>
  );
};

export default HeaderNavList;
