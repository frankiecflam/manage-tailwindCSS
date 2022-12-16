const CtaButton = ({ className }: { className?: string }) => {
  return (
    <button
      className={`capitalize bg-brightRed py-2 px-4 text-sm rounded-2xl text-white shadow-lg duration-300 hover:shadow-2xl hover:-translate-y-2 hover:opacity-50 active:shadow-lg active:translate-y-0 active:opacity-100 ${className}`}
    >
      Get Started
    </button>
  );
};

export default CtaButton;
