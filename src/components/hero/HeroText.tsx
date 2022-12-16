import React from "react";
import CtaButton from "../cta/CtaButton";

const HeroText = () => {
  return (
    <div className="flex flex-col h-96 justify-around">
      <h1 className="text-darkBlue-default font-bold text-4xl desktop:text-6xl">
        Bring everyone together to build better products.
      </h1>
      <p className="text-base mobile:text-lg desktop:text-2xl">
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </p>
      <CtaButton className="self-center w-48 tablet:self-start" />
    </div>
  );
};

export default HeroText;
