import Image from "next/image";

const UpcomingBatch = () => {
  let batchData = [
    {
      date: "05/06/2024",
      timing: "8:00 AM to 9:00 AM",
      duration: "5-6 Months",
      mode: "Online",
    },
    {
      date: "05/06/2024",
      timing: "6:00 AM to 7:00 AM",
      duration: "5-6 Months",
      mode: "Offline",
    },
    {
      date: "05/06/2024",
      timing: "7:00 AM to 8:00 AM",
      duration: "5-6 Months",
      mode: "Online",
    },
    {
      date: "05/06/2024",
      timing: "8:00 AM to 9:00 AM",
      duration: "5-6 Months",
      mode: "Offline",
    },
    {
      date: "05/06/2024",
      timing: "8:00 AM to 9:00 AM",
      duration: "5-6 Months",
      mode: "Online",
    },
  ];
  return (
    <div className={"w-full mx-auto flex gap-3 mt-24 "}>
      <div className="w-[80%] flex my-4 mx-auto">
        {/* Batches tables section */}
        <div className="w-[70%] flex flex-col gap-10">
          {/* Heading section */}
          <div>
            <h1 className="text-[#0466C1] uppercase text-start font-semibold text-3xl tracking-wider pb-8">
              Upcoming Batches
            </h1>
          </div>
          {/* Table section */}
          <div>
            <table className="w-full table-auto bg-white border-[1px] rounded-lg ">
              <thead>
                <tr>
                  <th className="text-start px-3 py-2 text-[#0466C1] text-lg font-semibold">
                    Date
                  </th>
                  <th className="text-start px-3 py-2 text-[#0466C1] text-lg font-semibold">
                    Timing
                  </th>
                  <th className="text-start px-3 py-2 text-[#0466C1] text-lg font-semibold">
                    Duration
                  </th>
                  <th className="text-start px-3 py-2 text-[#0466C1] text-lg font-semibold">
                    Mode
                  </th>
                </tr>
              </thead>
              <tbody>
                {batchData.map((bt, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-3 px-3 border-b-2">{bt.date}</td>
                      <td className="py-3 px-3 border-b-2">{bt.timing}</td>
                      <td className="py-3 px-3 border-b-2">{bt.duration}</td>
                      <td className="py-3 px-3 border-b-2">{bt.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* button section */}
          <div className="mb-4">
            <button className="bg-white max-h-10 p-6 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span>Get Next Batch Details</span>
              <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                ›
              </span>
            </button>
          </div>
        </div>

        {/* Batch Img section */}
        <div className="h-[80%] mx-auto ">
          <Image width={50} height={50} src="/batchImg.png" alt="batch-Img" className="w-full h-full"/>
        </div>
      </div>
    </div>
  );
};


export default UpcomingBatch;
