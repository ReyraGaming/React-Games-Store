"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Card from "./components/card"
import { register } from "swiper/element/bundle";
register();

export default function Home() {
  const data = [
    {
      id: 1,
      image: `https://i.ibb.co/M2kB4h9/Toukiden.jpg`,
      title: `Toukiden : Kiwami`,
      desc: `"Toukiden: Kiwami" is a hunting action game where players take on the role of a Slayer possessing unique abilities, and battle the Oni to save mankind from destruction. To defeat these huge Oni, players band together to sever, pierce, and crush parts of the Oni using the Targeted Destruction System!`,
      button: `Explore Now`,
    },
    {
      id: 2,
      image: `https://i.ibb.co/QmRXLjm/Resident-Evil-4.jpg`,
      title: `Resident Evil 4 Remake`,
      desc: `Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president's kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.`,
      button: `Explore Now`,
    },
    {
      id: 3,
      image: `https://i.ibb.co/drsqBCC/God-Eater-2.jpg`,
      title: `God Eater 2`,
      desc: `Swear your oath as a GOD EATER and drive back the supernatural harbingers of Earth’s destruction. `,
      button: `Explore Now`,
    },
  ];

  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  });

  const carouselList = data.map((item) => (
    <swiper-slide className="flex" key={item.id}>
      <Image
        className="flex justify-center w-full h-[720px] align-middle object-cover"
        src={item.image}
        width={1280}
        height={720}
        alt={item.title}
      />
      <div className="absolute top-[140px] left-[80px] right-[80px] font-overpass text-center text-[#85eff7]">
        <h2 className="text-[69px]">{item.title}</h2>
        <p className="text-[20px] pb-7">{item.desc}</p>
        <button className="bg-blue-600 rounded-lg py-4 px-2">
          <Link href="#">{item.button}</Link>
        </button>
      </div>
    </swiper-slide>
  ));
  
  return (
    <>
      <swiper-container ref={swiperElRef} slides-per-view={1} navigation="true">
        {carouselList}
      </swiper-container>
      <section className=" bg-gradient-to-l from-[#3546dd] to-[#372270] px-10 py-4 font-overpass">
        <p className="text-md text-[#e69215] font-bold">Trending</p>
        <div className="flex flex-row py-4 font-bold justify-between">
          <h1 className="text-4xl">Trending Games</h1>
          <button className="bg-[#f0663b] py-2 px-2 rounded-lg hover:bg-[#421f14] hover:text-white">
            <Link href="#" className="font-overpass">View All</Link>
          </button>
        </div>
        <div className="flex flex-row gap-4 py-6">
          <Card />
        </div>
      </section>
    </>
  );
}
