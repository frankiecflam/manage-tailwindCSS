import Image from "next/image";
import { HeroGraphImage } from "../../assets/images";

const HeroGraph = () => {
  return (
    <div className="order-first tablet:order-last">
      <Image
        src={HeroGraphImage}
        alt="A diagram showing how Manage draws a conclusion based on provided figures"
      />
    </div>
  );
};

export default HeroGraph;
