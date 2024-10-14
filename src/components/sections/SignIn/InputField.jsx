import React, { useState } from 'react';

function InputField({ label, type }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="relative mt-10 w-full max-sm:pr-10 max-sm:ml-4">
      <input
        type={type}
        id={label.toLowerCase().replace(/\s+/g, '-')}
        className="block w-full px-0.5 border-b-2 border-black bg-transparent focus:outline-none focus:ring-0 peer"
        aria-label={label}
        value={value}
        onChange={handleChange}
        placeholder=" "
      />
      <label
        htmlFor={label.toLowerCase().replace(/\s+/g, '-')}
        className={`absolute left-0 -top-3.5 text-base text-black opacity-40 transition-all duration-200 transform ${
          value ? '-translate-y-6 scale-75' : 'translate-y-0 scale-100'
        } peer-focus:-translate-y-6 peer-focus:scale-75`}
      >
        {label}
      </label>
    </div>
  );
}

export default InputField;
