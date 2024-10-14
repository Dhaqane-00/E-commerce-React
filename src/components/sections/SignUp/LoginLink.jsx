import React from 'react';
import { Link } from 'react-router-dom';

function LoginLink() {
  return (
    <div className="flex gap-4 items-center mt-8">
      <p className="self-stretch my-auto opacity-70">
        Already have account?
      </p>
      <div className="flex flex-col self-stretch my-auto font-medium w-[47px]">
        <Link to="/SignIn" className="opacity-70">Log in</Link>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eea1fdbb2df9bcc15eb27995b4c98845aba8c3cf8f59aa871e92696b89d13a96?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc" alt="" className="object-contain mt-1 aspect-[47.62] w-[47px]" />
      </div>
    </div>
  );
}

export default LoginLink;