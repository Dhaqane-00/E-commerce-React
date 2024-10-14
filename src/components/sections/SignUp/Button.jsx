import React from 'react';

function Button({ text }) {
  return (
    <button className="gap-2.5 self-stretch px-32 py-4 mt-10 font-medium bg-red-500 rounded text-neutral-50 max-md:px-5">
      {text}
    </button>
  );
}

export default Button;