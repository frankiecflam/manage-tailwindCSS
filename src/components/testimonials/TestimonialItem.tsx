import Image, { StaticImageData } from "next/image";

export default function TestimonialItem({
  customerImage,
  customerName,
  content,
  currentSlidingPosition,
  positionIndex,
}: {
  customerImage: StaticImageData;
  customerName: string;
  content: string;
  currentSlidingPosition: number;
  positionIndex: number;
}) {
  return (
    <li
      className={`flex flex-col items-center justify-around bg-lightGray p-10 rounded-sm  absolute h-full mx-4 duration-500 ${
        positionIndex - currentSlidingPosition !== 0
          ? positionIndex - currentSlidingPosition < 0
            ? "-translate-x-full"
            : "translate-x-full"
          : ""
      }`}
    >
      <header>
        <Image
          src={customerImage}
          alt={`Image of customer - ${customerName}`}
          width={75}
          height={75}
        />
        <p className="text-darkBlue-default text-center font-medium">
          {customerName}
        </p>
      </header>
      <p className="text-grayBlue">&ldquo;{content}&rdquo;</p>
    </li>
  );
}
