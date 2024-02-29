import Image from "next/image";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-col max-w-[340px] gap-y-4 rounded-lg font-fireSans bg-gray-400 hover:shadow-[6px_-4px_8px_3px_rgba(130,114,114,0.75)] hover:scale-[1.1] transition-transform cursor-pointer">
      <Image
        className="w-full h-[160px] object-cover rounded-lg"
        src={data.image}
        alt={data.title}
        width={720}
        height={1280}
      />
      <div className="flex flex-col px-1 py-2">
        <div className="ml-2 pl-2 w-[100px] font-kanit bg-slate-500">
          <p className="text-white py-3 font-bold text-[10px]">{data.genre}</p>
        </div>
        <div className="flex w-[251px] py-2 justify-between text-[12px]">
          <h2 className="font-bold text-white pl-2 p-1 font-kanit">
            {data.title}
          </h2>
          <div className="px-2">
            <p className="text-white bg-blue-500 rounded-lg ml-2 p-1">
              Rp.{data.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
