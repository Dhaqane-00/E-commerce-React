
import React from 'react';

function GoogleSignIn() {
  return (
    <button className="flex flex-col justify-center px-20 py-4 mt-4 text-base text-black rounded border border-solid border-black border-opacity-40 max-md:px-5">
      <div className="flex gap-4 items-start">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/29cf50bdf91cc08e5d571fe30f53272db2a249ca668a6147045d952e57c21c4d?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc" alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <span>Sign In with Google</span>
      </div>
    </button>
  );
}

export default GoogleSignIn;