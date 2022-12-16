import AboutIntro from "./AboutIntro";
import AboutSteps from "./AboutSteps";

const About = () => {
  return (
    <section className="grid tablet:grid-cols-2 px-8 py-12 gap-x-8 gap-y-24 desktop:gap-x-32">
      <AboutIntro />
      <AboutSteps />
    </section>
  );
};

export default About;
