import HeroGraph from "./HeroGraph";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="grid tablet:grid-cols-2 tablet:min-h-screen tablet:items-center py-24 px-8 gap-x-10 desktop:gap-x-20">
      <HeroGraph />
      <HeroText />
    </section>
  );
};

export default Hero;
