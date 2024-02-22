"use client";

import data from "../data/populars";
import Image from "next/image";
import Link from "next/link";

const desc = () => {
  return (
    <section className="text-white grid grid-cols-2 p-4">
      <Image
      className="rounded-[40px]"
        src={data[0].image}
        alt={data[0].title}
        width={1280}
        height={720}
      />
      <div className="flex flex-col font-overpass text-center gap-4 mx-3 px-3 py-3 rounded-[40px] bg-[#1C4966]">
        <h2 className="text-[50px]">{data[0].title}</h2>
        <div className="flex flex-row justify-center">
          <p className="space-between">
            <Link href="#">Action</Link>,<Link href="#">Horror</Link>,
            <Link href="#">Survival</Link>
          </p>
        </div>
        <h2>Rp.{data[0].price}</h2>
        <p className="font-poppins">Survival is just the beginning. Six years have passed since the biological disaster in Raccoon City. Leon S. Kennedy, one of the survivors, tracks the president kidnapped daughter to a secluded European village, where there is something terribly wrong with the locals.</p>
        <button className="mx-[210px] p-3 bg-[#66CDAA] hover:bg-[#003366] rounded-[40px]">Buy Now</button>
      </div>
    </section>
  );
};

export default desc;
