import styles from "../learn.module.css";

const ApplyJobs = ({}) => {
  let jobDetails = [
    {
      title: "UI/UX Designer",
      rupees: "40",
    },
    {
      title: "Graphic Designer",
      rupees: "30",
    },
    {
      title: "Frontend Developer",
      rupees: "35",
    },
    {
      title: "Backend Developer",
      rupees: "35",
    },
    {
      title: "Java Developer",
      rupees: "45",
    },
  ];
  return (
    <div className="w-full mx-auto py-4 bg-black">
      <div className="w-[80%] mx-auto">
        <div className="w-full my-3">
          <h1 className="text-[#78B6FF] uppercase py-4 text-start font-semibold text-2xl ">
            Apply for this job roles after completing the course
          </h1>
        </div>
        <div className="w-full flex">
          <div className="w-1/2 p-3 text-white">
            {jobDetails.map((jd, index) => {
              return (
                <div key={index} className=" relative my-2">
                  <progress
                    value={`${jd.rupees}`}
                    max="50"
                    className={`${styles.progressBar}`}
                  />
                  <div
                    className={`w-[calc(100%-50px)] absolute top-[25%] ps-4 flex justify-between gap-10`}
                  >
                    <h2 className="font-semibold text-lg">{jd.title}</h2>
                    <div className="flex flex-col ">
                      <p className="font-semibold text-lg">{jd.rupees}</p>
                      <p className="text-sm ">k / year</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-1/2 p-3 text-white">
            {jobDetails.map((jd, index) => {
              return (
                <div key={index} className=" relative my-2">
                  <progress
                    value={`${jd.rupees}`}
                    max="50"
                    className={`${styles.progressBar}`}
                  />
                  <div
                    className={`absolute top-[25%] ps-4 flex justify-between gap-10`}
                  >
                    <h2 className="font-semibold text-lg">{jd.title}</h2>
                    <div className="flex flex-col ">
                      <p className="font-semibold text-lg">{jd.rupees}</p>
                      <p className="text-sm ">k / year</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyJobs;
