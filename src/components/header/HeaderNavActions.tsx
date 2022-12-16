import CtaButton from "../cta/CtaButton";
import HeaderNavMobileBtn from "./HeaderNavMobileBtn";

const HeaderNavActions = ({
  onNavBtnClick,
  showMobileNav,
}: {
  onNavBtnClick: () => void;
  showMobileNav: boolean;
}) => {
  return (
    <div className="flex gap-x-3 items-center">
      <CtaButton className="hidden tablet:block" />
      <HeaderNavMobileBtn
        onClick={onNavBtnClick}
        showMobileNav={showMobileNav}
      />
    </div>
  );
};

export default HeaderNavActions;
