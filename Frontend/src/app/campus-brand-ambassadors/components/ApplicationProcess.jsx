import Image from "next/image";
import "../style.css";

const ApplicationProcess = () => {
  return (
    <div className="w-full my-10 py-10 bg-gradient text-white">
      <div className="w-[80%] mx-auto ">
        <h1 className="text-[#0466C1] uppercase font-semibold text-3xl my-4">
          Application Process
        </h1>
        <div className="flex justify-between items-center">
          {/* 1 */}
          <div className="flex items-center  gap-3">
            <p className="text-5xl font-bold">1</p>
            <h2 className="text-xl font-semibold">Registration</h2>
          </div>

          {/* arrow */}
          <div>
            <Image
              src={"/arrow-right.png"}
              width={15}
              height={15}
              style={{ width: "20px", height: "16px" }}
              alt="arrow"
            />
          </div>

          {/* 2 */}
          <div className="flex items-center  gap-3">
            <p className="text-5xl font-bold">2</p>
            <h2 className="text-xl font-semibold">Interviews</h2>
          </div>

          {/* arrow */}
          <div>
            <Image
              src={"/arrow-right.png"}
              width={15}
              height={15}
              style={{ width: "20px", height: "16px" }}
              alt="arrow"
            />
          </div>

          {/* 3 */}
          <div className="flex items-center  gap-3">
            <p className="text-5xl font-bold">3</p>
            <h2 className="text-xl pt-2 font-semibold">Task Based <span className="block"> Performance</span></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
