export function AboutStepsItem({
  step,
  heading,
  content,
}: {
  step: string;
  heading: string;
  content: string;
}) {
  return (
    <li className="grid grid-cols-6 gap-y-4">
      <div className="col-span-full grid grid-cols-6 items-center bg-paleRed tablet:bg-transparent rounded-full">
        <p className="col-span-1 text-center bg-brightRed text-white py-2 px-4 rounded-full">
          {step}
        </p>
        <p className="col-span-full col-start-2 pl-4 font-semibold text-darkBlue-default text-base tablet:text-xl">
          {heading}
        </p>
      </div>
      <p className="col-span-full tablet:col-start-2 tablet:pl-4">{content}</p>
    </li>
  );
}

const AboutSteps = () => {
  return (
    <div>
      <ul className="flex flex-col gap-y-12">
        <AboutStepsItem
          step="01"
          heading="Track company-wide progress"
          content="See how your day-to-day tasks fit into
            the wider vision. Go from tracking progress at the milestone level
            all the way done to the smallest of details. Never lose sight of the
            bigger picture again."
        />
        <AboutStepsItem
          step="02"
          heading="Advanced built-in reports"
          content="Set internal delivery estimates and track
          progress toward company goals. Our customisable dashboard helps you
          build out the reports you need to keep key stakeholders informed."
        />
        <AboutStepsItem
          step="03"
          heading="Everything you need in one place"
          content="Stop jumping from one service to
          another to communicate, store files, track tasks and share
          documents. Manage offers an all-in-one team productivity solution."
        />
      </ul>
    </div>
  );
};

export default AboutSteps;
