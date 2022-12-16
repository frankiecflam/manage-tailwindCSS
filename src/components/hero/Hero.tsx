import HeroGraph from "./HeroGraph";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <section className="grid tablet:grid-cols-2 py-24 px-8">
      <HeroGraph />
      <HeroText />
    </section>
  );
};

export default Hero;
