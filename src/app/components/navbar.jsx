import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="bg-gradient-to-r from-[#6796e0] to-[#2060c7] flex justify-around items-center px-10 py-4 font-overpass">
            <p className="text-3xl font-bold">Game<span className='text-blue-700'>S</span><span className='text-cyan-300'>tore</span></p>
            <div className="flex flex-row gap-8 items-center">
                <input className="px-2 py-2 rounded-lg" placeholder="Search Games" type="text" />
                <Link href="#" className="hover:text-white">Home</Link>
                <Link href="#explore" className="hover:text-white">Explore</Link>
                <Link href="#about" className="hover:text-white">About</Link>
                <Link href="#contact" className="hover:text-white">Contact</Link>
                <Link href="#" className="bg-[#979fbd] px-4 py-1 rounded-lg hover:bg-[#54abf7]">Sign In</Link>
                <Link href="#" className="bg-[#979fbd] px-4 py-1 rounded-lg hover:bg-[#54abf7]">Sign Out</Link>
            </div>
        </nav>
    )
}