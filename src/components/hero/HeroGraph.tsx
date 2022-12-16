import Image from "next/image";
import { HeroGraphImage, TabletImage } from "../../assets/images";

const HeroGraph = () => {
  return (
    <div className="order-first tablet:order-last h-96 relative">
      <Image
        src={HeroGraphImage}
        alt="A diagram showing how Manage draws a conclusion based on provided figures"
        className="max-h-full z-10"
        fill
        sizes="580x525"
      />
      <Image
        src={TabletImage}
        alt="image of a big tablet"
        className="absolute -translate-y-1/2"
      />
    </div>
  );
};

export default HeroGraph;
