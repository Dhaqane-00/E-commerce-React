import React from "react";
import Timer from "./Timer";
import ProductCarousel from "./ProductCarousel";

const flashSalesData = [
  {
    id: 1,
    discount: 40,
    image: 'src/assets/img/gamePad1.jpg',
    name: "HAVIT HV-G92 Gamepad",
    currentPrice: 120,
    originalPrice: 160,
  },
  {
    id: 2,
    discount: 35,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/00d93adab53c5214ab1a164999c542db25c2e68622e0085e7c9140fbeae9a9e5?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    name: "AK-900 Wired Keyboard",
    currentPrice: 960,
    originalPrice: 1160,
  },
  {
    id: 3,
    discount: 30,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e681814c6929e4c96d1d5f86b4cfc1b061bc3a38cc780b20e4937fd953947b8b?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    name: "IPS LCD Gaming Monitor",
    currentPrice: 370,
    originalPrice: 400,
  },
  {
    id: 4,
    discount: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eeba3e00b0c8d43bdf1358be59350c61cc35795ed1cd343c99f609d8dd0774e6?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    name: "S-Series Comfort Chair",
    currentPrice: 375,
    originalPrice: 400,
  },
  {
    id: 5,
    discount: 25,
    image: 'src/assets/img/S-series Comford Chair.jpg',
    name: "S-Series Comfort Chair",
    currentPrice: 375,
    originalPrice: 400,
  },
  {
    id: 4,
    discount: 45,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/eeba3e00b0c8d43bdf1358be59350c61cc35795ed1cd343c99f609d8dd0774e6?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    name: "S-Series Comfort Chair",
    currentPrice: 505,
    originalPrice: 900,
  },
];

function FlashSales() {
  return (
    <section className="flex flex-col">
      <header className="flex flex-wrap gap-10 items-end self-start max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-end min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col h-[103px]">
            <div className="flex gap-4 items-center self-start">
              <div className="flex flex-col self-stretch my-auto w-5">
                <div className="flex shrink-0 h-10 bg-red-500 rounded" />
              </div>
              <h2 className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
                Today's
              </h2>
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-widest leading-none text-black">
              Flash Sales
            </h1>
          </div>
          <Timer />
        </div>
      </header>
      <ProductCarousel products={flashSalesData} />
      <button className="self-center px-4 py-2 mt-[100px] text-white bg-[#DB4444] rounded hover:bg-[#f44040]">
        View All Products
      </button>
      <hr className="my-4 mt-[50px] border-t border-gray-300 " />
    </section>
  );
}

export default FlashSales;
