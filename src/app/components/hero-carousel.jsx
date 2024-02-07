"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import carousel from "../data/carousel";

import { register } from "swiper/element/bundle";
register();

function CarouselCard(item) {
  return (
    <swiper-slide className="flex" key={item.id}>
      <Image
        className="flex justify-center w-full h-[90vh] align-middle object-cover"
        src={item.image}
        width={1280}
        height={720}
        alt={item.title}
      />
      <div className="absolute bg-[#0000002d] top-[140px] left-[80px] right-[80px] font-overpass text-center text-[#85eff7]">
        <div className="flex justify-center items-center">
          <Image
            className="w-[320px]"
            src={item.subImage}
            width={720}
            height={480}
            alt={item.title}
          />
        </div>
        <p className="text-[20px] pb-7">{item.desc}</p>
        <button className="bg-blue-600 rounded-lg py-4 px-2">
          <Link href="#">{item.button}</Link>
        </button>
      </div>
    </swiper-slide>
  );
}

export default function HeroCarousel() {
  const swiperElRef = useRef(null);
  const [domIsReady, setDomIsReady] = useState(false);

  useEffect(() => {
    // Pakai useEffect untuk menjalankan sesuatu ketika DOM sudah ready
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });

    setDomIsReady(true);
  }, []);

  return (
    <div className="min-h-[90vh] bg-yellow-200 mt-[-80px]">
      <div className={!domIsReady ? "hidden" : ""}>
        <swiper-container
          ref={swiperElRef}
          slides-per-view={1}
          navigation="true"
        >
          {carousel.map((item) => (
            <CarouselCard key={item.id} {...item} />
          ))}
        </swiper-container>
      </div>
    </div>
  );
}
