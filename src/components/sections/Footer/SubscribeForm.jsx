import React, { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-8 items-center py-3 pl-4 mt-4 max-w-full text-base rounded border-solid border-[1.5px] border-neutral-50 w-[217px]"
    >
      <label htmlFor="emailInput" className="sr-only">
        Enter your email
      </label>
      <input
        id="emailInput"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="self-stretch my-auto opacity-40 bg-transparent text-neutral-50 outline-none"
        aria-label="Enter your email"
        required
      />
      <button type="submit" aria-label="Subscribe">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/12a54082781a806227ade42d81d6722495cd51ed50c28a6b5eebf5a1f9d88295?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt=""
        />
      </button>
    </form>
  );
};

export default SubscribeForm;
