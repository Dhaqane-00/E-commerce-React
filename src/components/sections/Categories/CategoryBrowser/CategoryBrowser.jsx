
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b65b395cdd3e4d96a550ae8f07e745bd6402d57efcb35a97761a0b9d376d8df6?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    altText: "Phone icon",
    label: "Phones",
    href: "/category/phones",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/00eec0af7c44531105311629652158ec0094d4acfb57677cfa7d90cb52f621ee?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    altText: "Computer icon",
    label: "Computers",
    href: "/category/computers",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/32c895728efc92f8d69058d12a62bd64f64a1005af6b4511beadfa585e41376d?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    altText: "SmartWatch icon",
    label: "SmartWatch",
    href: "/category/smartwatch",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9e1812fc58e300eb7a88414fb054e42ef6d344f44fd014f08a6facb41bd463d0?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    altText: "Camera icon",
    label: "Camera",
    href: "/category/camera",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1b1ca280d0755107950e4263f4ba8ea778eca249ce77b18a19c917f5ab15d737?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    altText: "Headphones icon",
    label: "HeadPhones",
    href: "/category/headphones",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ae5f1ef45ec5c0e4e12a07f0bcb1ecf8f2526a7c8f139c3fa1532b2e02296308?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc",
    altText: "Gaming icon",
    label: "Gaming",
    href: "/category/gaming",
  },
];

function CategoryBrowser() {
  const [activeIndex, setActiveIndex] = useState(3);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : categories.length - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < categories.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="flex flex-col">
      <header className="flex flex-wrap gap-10 items-end max-md:max-w-full">
        <div className="flex flex-col min-w-[240px]">
          <div className="flex gap-4 items-center self-start">
            <div className="flex flex-col self-stretch my-auto w-5">
              <div className="flex shrink-0 h-10 bg-red-500 rounded" />
            </div>
            <h2 className="self-stretch my-auto text-base font-semibold leading-none text-red-500">
              Categories
            </h2>
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-widest leading-none text-black">
            Browse By Category
          </h1>
        </div>
        <nav
          className="flex gap-2 items-start"
          aria-label="Category navigation"
        >
          <button
            onClick={handlePrevious}
            aria-label="Previous category"
            className="focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d46c131187bfff9eb633481579a064341b51d7196040ee40dd3f9577e445a5e?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc"
              alt=""
              className="object-contain shrink-0 aspect-square w-[46px]"
            />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next category"
            className="focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e88e31fcac886e936832d43b7fb2b7a3e219274da66d8e9d07a08a6cc7094c1b?placeholderIfAbsent=true&apiKey=fc9062f21cc44ad5ad201376f7951edc"
              alt=""
              className="object-contain shrink-0 aspect-square w-[46px]"
            />
          </button>
        </nav>
      </header>
      <main className="flex flex-wrap gap-8 items-start mt-16 text-base whitespace-nowrap max-md:mt-10 max-md:max-w-full">
        {categories.map((category, index) => (
          <CategoryItem
            key={index}
            imageSrc={category.imageSrc}
            altText={category.altText}
            label={category.label}
            isActive={index === activeIndex}
            href={category.href}
          />
        ))}
      </main>
    </section>
  );
}

export default CategoryBrowser;
