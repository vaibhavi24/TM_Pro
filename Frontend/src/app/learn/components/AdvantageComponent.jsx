import Image from "next/image";

const AdvantageComponent = ({}) => {
  return (
    <div className="w-full my-10 mx-auto ">
      <div className="w-[80%] mx-auto my-10">
        <h1 className="text-[#0466C1] uppercase py-4 text-start font-bold text-3xl ">
          The Techmomentum Advantages
        </h1>
        <p>The most effective project-based immersive learning experience</p>
      </div>
      <div className="w-[80%] mx-auto my-10 flex justify-between gap-2">
        {[
          "Immersive Learning",
          "Learn by Doing",
          "Cloud Labs",
          "Outcome-Focused",
        ].map((i, index) => {
          return (
            <p
              key={index}
              className="bg-red-100 text-center w-1/4 px-6 py-2 rounded-sm text-md font-semibold hover:bg-[#78B6FF] hover:text-[#03006D]"
            >
              {i}
            </p>
          );
        })}
      </div>
      <div className="w-[80%] mx-auto my-10 flex justify-between p-3">
        <div>
          {[
            {
              icon: "play",
              title: "On-demand videos",
            },
            {
              icon: "blue-file",
              title: "Auto-graded assessments and recall quizzes",
            },
            {
              icon: "edit",
              title: "Guided hands-on exercises",
            },
            {
              icon: "blue-monitor",
              title: "Assignments and projects",
            },
          ].map((i, index) => {
            return (
              <div key={index} className="flex justify-start gap-3 p-6 my-3">
                <Image
                  width={20}
                  height={20}
                  style={{ width: "auto", height: "auto" }}
                  src={`/${i.icon}.png`}
                  alt={i.icon}
                />
                <p className="text-[#0466C1] text-md ">{i.title}</p>
              </div>
            );
          })}
        </div>
        <div className="w-1/2">
          <Image width={300} height={200}
          style={{width: "100%", height: "100%"}}
            src="/tm-advantage-img.png"
            alt="tm-advantage-img"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvantageComponent;
