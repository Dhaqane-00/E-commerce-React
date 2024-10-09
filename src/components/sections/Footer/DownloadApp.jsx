import React from "react";
import SocialIcons from "./SocialIcons";

const DownloadApp = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h3 className="text-xl font-medium leading-snug text-neutral-50">
          Download App
        </h3>
        <div className="flex flex-col mt-6">
          <p className="text-xs font-medium opacity-70 text-neutral-50">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-2 items-center mt-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/eea58754d717cfcc9af195e6cb2ee0d2841c30fecd62d9cef8132dc530d1448d?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc"
              className="object-contain shrink-0 self-stretch my-auto w-20 aspect-square"
              alt="QR Code"
            />
            <div className="flex flex-col self-stretch my-auto w-[110px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a0011e5a16669b37837b7d57675eb91b8099c37f37be9c4d12e698e193d49d?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc"
                className="object-contain max-w-full aspect-[2.75] w-[110px]"
                alt="App Store"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e815fcb4af82376341f7e3002c89152cb3b9e6d29e4d0efcb4e01999aa39bcc1?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc"
                className="object-contain mt-1 max-w-full aspect-[2.75] w-[110px]"
                alt="Google Play"
              />
            </div>
          </div>
        </div>
      </div>
      <SocialIcons />
    </div>
  );
};

export default DownloadApp;
