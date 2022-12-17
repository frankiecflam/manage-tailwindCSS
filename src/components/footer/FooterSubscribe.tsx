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

    setEmailInputFeedback("Thank you for subscribing to our newsletter!");
  };

  return (
    <div className="col-span-4">
      <form className="" noValidate onSubmit={handleFormSubmit}>
        <input
          placeholder="Updates in your inbox..."
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          className="py-2 px-6 rounded-full outline-brightRed w-4/6"
        />
        <button
          type="submit"
          className="bg-brightRed text-white ml-4 py-2 px-6 rounded-full"
        >
          Go
        </button>
        {emailInputFeedback && (
          <p className="text-white font-medium mt-3">{emailInputFeedback}</p>
        )}
      </form>
    </div>
  );
};

export default FooterSubscribe;
