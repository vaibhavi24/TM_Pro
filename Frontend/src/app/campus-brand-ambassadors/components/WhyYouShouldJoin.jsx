import Image from "next/image";

const WhyYouShouldJoin = () => {
  let cardData = [
    {
      img: "/rectangle-34783@2x.png",
      title: "Grow as an AI-focused founder or tech leader",
      subTitle:
        "Gain access to cutting-edge Microsoft technologies, including Microsoft 365, Visual Studio Enterprise and Azure.",
    },
    {
      img: "/rectangle-34783@2x.png",
      title: "Boost your confidence",
      subTitle:
        "Gain access to cutting-edge Microsoft technologies, including Microsoft 365, Visual Studio Enterprise and Azure.",
    },
    {
      img: "/rectangle-34783@2x.png",
      title: "Join a thriving community",
      subTitle:
        "Gain access to cutting-edge Microsoft technologies, including Microsoft 365, Visual Studio Enterprise and Azure.",
    },
  ];

  let imgStyling = { objectFit: "cover", width: "100%", height: "100%" };
  return (
    <div className="w-full my-10 p-3">
      <div className="w-[80%] mx-auto flex flex-col justify-between gap-6">
        {/* Heading section */}
        <div>
          <h1 className="text-[#0466C1] uppercase font-semibold text-3xl my-4">
            Why you should join
          </h1>
          <p>
            In this quiz, you will be tested on Core Java basics and OOPS
            concepts. There are some code snippets too to test your basic Java
            coding skills. Some of the questions have multiple answers.
          </p>
        </div>

        {/* Card Content section */}
        <div className="w-full flex justify-between items-center gap-3 ">
          {cardData.map((cd, index) => {
            return (
              <div
                key={index}
                className="w-1/3 h-[350px] flex flex-col gap-2 rounded-lg overflow-hidden border-[1px] border-slate-300"
              >
                <div>
                  <Image
                    src={cd.img}
                    width={400}
                    height={200}
                    style={imgStyling}
                    alt="WhyYouShouldJoinImage"
                  />
                </div>
                <div className="p-3">
                  <h1 className="text-lg font-medium mb-3">{cd.title}</h1>
                  <p>{cd.subTitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyYouShouldJoin;
