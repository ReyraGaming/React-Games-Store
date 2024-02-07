import Most from "./components/most";
import Populars from "./components/populars";
import HeroCarousel from "./components/hero-carousel";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section className=" bg-gradient-to-l from-[#3546dd] to-[#372270] px-10 py-4 font-overpass">
        <p className="text-md text-[#e69215] font-bold">Popular</p>
        <div className="flex flex-row py-4 font-bold justify-between">
          <h1 className="text-4xl">Popular Games</h1>
          <button className="bg-[#f0663b] py-2 px-2 rounded-lg hover:bg-[#421f14] hover:text-white">
            <Link href="#" className="font-overpass">
              View All
            </Link>
          </button>
        </div>
        <Populars />
      </section>
      <section className="bg-gradient-to-l from-[#3546dd] to-[#372270] px-10 py-4 font-overpass">
        <p className="text-md text-[#e69215] font-bold">Most Played</p>
        <div className="flex flex-row py-4 font-bold justify-between">
          <h1 className="text-4xl">Most Played Games</h1>
          <button className="bg-[#f0663b] py-2 px-2 rounded-lg hover:bg-[#421f14] hover:text-white">
            <Link href="#" className="font-overpass">
              View All
            </Link>
          </button>
        </div>
        <Most />
      </section>
    </>
  );
}
