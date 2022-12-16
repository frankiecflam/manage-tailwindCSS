const HeaderNavMobileBtn = ({
  onClick,
  showMobileNav,
}: {
  onClick: () => void;
  showMobileNav: boolean;
}) => {
  return (
    <button
      className="w-7 relative flex items-center tablet:hidden"
      onClick={onClick}
    >
      <div
        className={`w-full h-1 bg-darkBlue-default duration-500 absolute ${
          showMobileNav ? "translate-y-0 -rotate-45" : "-translate-y-2"
        }`}
      />
      <div
        className={`w-full h-1 duration-500 bg-darkBlue-default  ${
          showMobileNav ? "bg-transparent" : "bg-darkBlue-default"
        }`}
      />
      <div
        className={`w-full h-1 bg-darkBlue-default duration-500 absolute translate-y-2  ${
          showMobileNav ? "translate-y-0 rotate-45" : "translate-y-2"
        }`}
      />
    </button>
  );
};

export default HeaderNavMobileBtn;
