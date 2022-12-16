import React from "react";
import CtaButton from "./CtaButton";

const Cta = () => {
  return (
    <section className="px-10 tablet:px-20 py-12 bg-brightRed grid tablet:grid-cols-2 gap-x-8 desktop:gap-x-16 gap-y-10 items-center">
      <h1 className="text-white text-5xl font-bold text-center tablet:text-start">
        Simplify how your team works today.
      </h1>
      <div className="text-center">
        <CtaButton className="bg-lightGray text-brightRed" />
      </div>
    </section>
  );
};

export default Cta;
