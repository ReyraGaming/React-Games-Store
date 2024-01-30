import Image from "next/image";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-col max-w-[340px] gap-y-4 rounded-lg font-fireSans bg-gray-400 hover:shadow-[6px_-4px_8px_3px_rgba(130,114,114,0.75)] hover:scale-[1.1] transition-transform cursor-pointer">
      <p className="text-[16px] pt-2 text-white font-bold">{data.genre}</p>
      <Image className="object-cover rounded-lg h-[160px]" width={1280} height={720} src={data.image} alt={data.genre} />
    </div>
  );
};

export default Cards;
