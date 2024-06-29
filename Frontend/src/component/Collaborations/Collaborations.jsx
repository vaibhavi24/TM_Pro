import Image from "next/image";

const Collaborations = () => {
  return (
    <div className="w-[100%] h-auto bg-[#212121] my-10 py-4 text-white">
      <div className="w-[80%] mx-auto flex justify-center p-6">
        <div className="flex flex-col justify-between gap-4 w-[35%] h-[400px]">
          <div className="mb-16">
            <h2 className="mb-10 uppercase text-xl text-[#78B6FF] font-bold ">
              Collaborations
            </h2>
            <p className="text-4xl font-semibold flex flex-col mb-4 tracking-widest leading-[50px]">
              In Strategic Collaboration With 250+ Top Colleges All Across
              <span className="text-[#F28200]">Maharashtra</span>
            </p>
          </div>
          <button className="text-white ms-3 w-[30%] text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-white hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <span className="w-full me-2">Explore Now</span>
            <span className="ml-1 font-semibold text-2xl w-full">›</span>
          </button>
        </div>
        <div className="w-[60%] relative">
          <div className="">
            <div className="text-7xl font-bold tracking-wider text-slate-500">
              TECHMOMENTUM
            </div>
            <div className="text-7xl font-bold tracking-wider text-slate-600">
              TECHMOMENTUM
            </div>
            <div className="text-7xl font-bold tracking-wider text-slate-600">
              TECHMOMENTUM
            </div>
            <div className="text-7xl font-bold tracking-wider text-slate-700">
              TECHMOMENTUM
            </div>
            <div className="text-7xl font-bold tracking-wider text-slate-700">
              TECHMOMENTUM
            </div>
            <div className="text-7xl font-bold tracking-wider text-slate-800">
              TECHMOMENTUM
            </div>
            <div className="text-7xl font-bold tracking-wider text-slate-800">
              TECHMOMENTUM
            </div>
          </div>
          <div className="absolute top-[12%] left-[7%] w-[85%] h-[400px]">
            <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full">
              <div className="">
                <Image
                  width={200}
                  height={100}
                  src="/image-108@2x.png"
                  alt="collaborations-image-1"
                  className="w-full h-full"
                />
              </div>
              <div className="">
                <Image
                  width={200}
                  height={100}
                  src="/image111.png"
                  alt="collaborations-image-2"
                  className="w-full h-full "
                />
              </div>
              <div className="row-span-2">
                <Image
                  width={200}
                  height={300}
                  src="/image-132@2x.png"
                  alt="collaborations-image-3"
                  className="w-full h-full"
                />
              </div>
              <div className="">
                <Image
                  width={200}
                  height={100}
                  src="/image-109@2x.png"
                  alt="collaborations-image-4"
                  className="w-full h-full"
                />
              </div>
              <div className="">
                <Image
                  width={200}
                  height={100}
                  src="/image-111@2x.png"
                  alt="collaborations-image-5"
                  className="w-full h-full"
                />
              </div>
              {/* <!-- Empty div to skip the second cell in the second row --> */}
              <div className="col-span-3">
                <Image
                  width={300}
                  height={150}
                  src="/image-133@2x.png"
                  alt="collaborations-image-6"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
