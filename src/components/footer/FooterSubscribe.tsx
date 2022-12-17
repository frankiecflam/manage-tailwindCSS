import { FormEvent, useState } from "react";
import { z } from "zod";

const emailInputSchema = z
  .string()
  .email("Whoops! Your email address is invalid.");

const FooterSubscribe = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailInputFeedback, setEmailInputFeedback] = useState("");

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const emailValidationResult = emailInputSchema.safeParse(emailInput);

    if (!emailValidationResult.success) {
      const errorMessage = emailValidationResult.error.issues[0].message;

      setEmailInputFeedback(errorMessage);
      return;
    }
    setEmailInput("");
    setEmailInputFeedback("Thank you for subscribing to our newsletter!");
  };

  return (
    <div className="col-span-4 desktop:order-1 flex flex-col justify-between">
      <form noValidate onSubmit={handleFormSubmit}>
        <div className="flex">
          <input
            placeholder="Updates in your inbox..."
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            onFocus={() => setEmailInputFeedback("")}
            className="py-2 px-6 rounded-full outline-brightRed flex-1"
          />
          <button
            type="submit"
            className="bg-brightRed text-white ml-4 py-2 px-6 rounded-full"
          >
            Go
          </button>
        </div>
        <p className="text-white font-medium mt-3">{emailInputFeedback}</p>
      </form>
      <p className="text-grayBlue text-center absolute bottom-8 left-1/2 -translate-x-1/2 desktop:relative desktop:text-end desktop:bottom-0">
        &copy;Copyright 2020. All rights reserved
      </p>
    </div>
  );
};

export default FooterSubscribe;
