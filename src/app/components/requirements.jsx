import data from "../data/data_requirements";

const req = () => {
  return (
    <section className="text-white bg-[#1C4966] mx-4 my-3 rounded-[40px]">
      <h1 className="text-center text-[50px]">System Requirements</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-blue-500 rounded-[40px]">
          <h1 className="text-center">Minimum</h1>
          <div className="px-7 py-4">
            <p>OS : {data[0].OS}</p>
            <p>Processor : {data[0].Processor}</p>
            <p>Memory : {data[0].Memory} GB</p>
            <p>Graphics : {data[0].Graphics}</p>
            <p>DirectX : {data[0].DirectX}</p>
            <p>Network : {data[0].Network}</p>
          </div>
        </div>
        <div className="bg-blue-500 rounded-[40px]">
          <h1 className="text-center">Recommended</h1>
          <div className="px-7 py-4">
            <p>OS : {data[1].OS}</p>
            <p>Processor : {data[1].Processor}</p>
            <p>Memory : {data[1].Memory} GB</p>
            <p>Graphics : {data[1].Graphics}</p>
            <p>DirectX : {data[1].DirectX}</p>
            <p>Network : {data[1].Network}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default req;
