import Image from "next/image";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-col w-[375px] gap-y-4 rounded-lg font-fireSans bg-gray-400 hover:shadow-[6px_-4px_8px_3px_rgba(130,114,114,0.75)] hover:scale-[1.1] transition-transform cursor-pointer">
      <Image
        className="w-[400px] h-[240px] object-cover rounded-lg"
        src={data.image}
        alt={data.title}
        width={720}
        height={1280}
      />
      <div className="flex flex-col px-4 py-2">
        <div className="ml-2 pl-2 w-[100px] font-kanit bg-slate-500">
          <p className="text-white py-3 font-bold text-[10px]">{data.genre}</p>
        </div>
        <h2 className="font-bold text-white pl-2 pb-3 text-[28px] font-kanit">
          {data.title}
        </h2>
        <div className="bg-blue-500 rounded-lg pl-5 ml-[245px] w-[110px] font-[50px]">
          <p className="text-white text-[13px] line-through">Rp.{data.price}</p>
          <p className="text-white text-[13px]">Rp.{data.discount}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
