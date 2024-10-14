import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import PromotionContent from "./PromotionContent";
import PromotionImage from "./PromotionImage";

function IPhonePromotion() {
  const carouselRef = useRef(null);
  const images = [
    "src/assets/img/iphone14.svg",
    // "src/assets/img/iphone.jpg",
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(carousel.children, {
      xPercent: -100 * (carousel.children.length - 1),
      ease: "none",
      duration: 10,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden mt-10 pt-4 pl-4 pr-4 bg-black max-w-full">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col w-full md:w-[35%] z-10">
          <PromotionContent />
        </div>
        <div className="flex flex-col w-full md:w-[65%] z-0">
          <motion.div
            ref={carouselRef}
            className="flex" 
            initial={{ x: 0 }}
            animate={{ x: "-300%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {images.map((image, index) => (
              <PromotionImage key={index} imageSrc={image} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default IPhonePromotion;
