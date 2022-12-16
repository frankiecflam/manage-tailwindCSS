import TestimonialItem from "./TestimonialItem";
import {
  AnishaProfileImage,
  RichardProfileImage,
  ShanaiProfileImage,
  AliProfileImage,
  TabletImage,
} from "../../assets/images";
import CtaButton from "../cta/CtaButton";
import { useState, useEffect } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [slidingPosition, setSlidingPosition] = useState(1);

  useEffect(() => {
    const slidingInterval = setInterval(() => {
      setSlidingPosition((prevPosition) =>
        prevPosition === 4 ? 1 : ++prevPosition
      );
    }, 3000);

    return () => {
      clearInterval(slidingInterval);
    };
  }, []);

  return (
    <section className="flex flex-col items-center gap-y-10 px-8 py-12 relative">
      <h1 className="text-darkBlue-default font-bold text-4xl text-center">
        What they’ve said
      </h1>
      <ul className="relative w-80 h-80 tablet:w-96 tablet:h-96 overflow-hidden">
        <TestimonialItem
          customerImage={AnishaProfileImage}
          customerName="Anisha Li"
          content="Manage has supercharged our team's workflow. The ability to maintain 
          visibility on larger milestones at all times keeps everyone motivated."
          positionIndex={1}
          currentSlidingPosition={slidingPosition}
        />
        <TestimonialItem
          customerImage={AliProfileImage}
          customerName="Ali Bravo"
          content="We have been able to cancel so many other subscriptions since using 
          Manage. There is no more cross-channel confusion and everyone is much 
          more focused."
          positionIndex={2}
          currentSlidingPosition={slidingPosition}
        />
        <TestimonialItem
          customerImage={RichardProfileImage}
          customerName="Richard Watts"
          content="Manage allows us to provide structure and process. It keeps us organized 
          and focused. I can’t stop recommending them to everyone I talk to!"
          positionIndex={3}
          currentSlidingPosition={slidingPosition}
        />
        <TestimonialItem
          customerImage={ShanaiProfileImage}
          customerName="Shanai Gough"
          content="Their software allows us to track, manage and collaborate on our projects 
          from anywhere. It keeps the whole team in-sync without being intrusive."
          positionIndex={4}
          currentSlidingPosition={slidingPosition}
        />
      </ul>
      <ul className="flex gap-x-4">
        <li>
          <button
            className={`w-4 h-4 border-sold border-brightRed border-2 rounded-full duration-500 ${
              slidingPosition === 1 ? "bg-brightRed" : "bg-transparent"
            }`}
            onClick={() => setSlidingPosition(1)}
          />
        </li>
        <li>
          <button
            className={`w-4 h-4 border-sold border-brightRed border-2 rounded-full duration-500  ${
              slidingPosition === 2 ? "bg-brightRed" : "bg-transparent"
            }`}
            onClick={() => setSlidingPosition(2)}
          />
        </li>
        <li>
          <button
            className={`w-4 h-4 border-sold border-brightRed border-2 rounded-full duration-500 ${
              slidingPosition === 3 ? "bg-brightRed" : "bg-transparent"
            }`}
            onClick={() => setSlidingPosition(3)}
          />
        </li>
        <li>
          <button
            className={`w-4 h-4 border-sold border-brightRed border-2 rounded-full duration-500 ${
              slidingPosition === 4 ? "bg-brightRed" : "bg-transparent"
            }`}
            onClick={() => setSlidingPosition(4)}
          />
        </li>
      </ul>
      <Image
        src={TabletImage}
        alt="image of a big tablet"
        className="absolute -left-1/3 -z-10 -top-1/2 hidden tablet:block"
      />
      <CtaButton />
    </section>
  );
};

export default Testimonials;
