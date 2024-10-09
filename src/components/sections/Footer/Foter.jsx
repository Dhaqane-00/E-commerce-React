import React from "react";
import SocialIcons from "./SocialIcons";
import FooterColumn from "./FooterColumn";
import DownloadApp from "./DownloadApp";
import SubscribeForm from "./SubscribeForm";

const foter = () => {

  const footerColumns = [
    {
      title: "Support",
      items: [
        "111 Bijoy sarani, Dhaka,",
        "DH 1515, Bangladesh.",
        "exclusive@gmail.com",
        "+88015-88888-9999",
      ],
    },
    {
      title: "Account",
      items: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"],
    },
    {
      title: "Quick Link",
      items: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
    },
  ];

  return (
    <footer className="flex overflow-hidden flex-col justify-end pt-20 pb-6 bg-black">
      <div className="flex flex-wrap gap-10 justify-center items-start self-center max-md:max-w-full">
        <div className="flex flex-col text-neutral-50 w-[217px]">
          <div className="flex flex-col self-start">
            <div className="flex flex-col max-w-full whitespace-nowrap w-[118px]">
              <h2 className="w-full text-2xl font-bold tracking-wider leading-none">
                Exclusive
              </h2>
              <h3 className="mt-6 text-xl font-medium leading-snug">
                Subscribe
              </h3>
            </div>
            <p className="mt-6 text-base">Get 10% off your first order</p>
          </div>
          <SubscribeForm />
        </div>
        {footerColumns.map((column, index) => (
          <FooterColumn key={index} title={column.title} items={column.items} />
        ))}
        <DownloadApp />
      </div>
      <div className="flex flex-col items-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="w-full bg-white border border-white border-solid opacity-40 min-h-[1px] max-md:max-w-full" />
        </div>
        <div className="flex gap-3 items-center mt-4 text-base text-white">
          <div className="flex gap-1.5 items-center self-stretch my-auto min-w-[240px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9e77ca5f6362e8c84e9e430400b10a2e9fcc4f4b98d11736abbf6c72292338e?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc"
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              alt=""
            />
            <p className="self-stretch my-auto">
              Copyright Abdilaahi Dhaqane 2024. All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default foter;
