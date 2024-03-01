import Explore from "../explore/page";
import Link from "next/link";
import Login from './login'

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#4d73af] rounded-b-[37px] to-[#3c5b8d] flex justify-around items-center px-10 py-4 font-overpass relative z-50">
      <Link href="/" className="cursor-pointer">
        <p className="text-3xl font-bold">
          Game<span className="text-blue-700">S</span>
          <span className="text-cyan-300">tore</span>
        </p>
      </Link>
      <div className="flex flex-row gap-8 items-center">
        <input
          className="px-2 py-2 rounded-lg"
          placeholder="Search Games"
          type="text"
        />
        <Link href="/" className="hover:text-white">
          Home
        </Link>
        <Link href="/explore" className="hover:text-white">
          Explore
        </Link>
        <Link href="#about" className="hover:text-white">
          About
        </Link>
        <Link href="#contact" className="hover:text-white">
          Contact
        </Link>
        <Login />
        <Link
          href="#"
          className="bg-[#979fbd] px-4 py-1 rounded-lg hover:bg-[#54abf7]"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
