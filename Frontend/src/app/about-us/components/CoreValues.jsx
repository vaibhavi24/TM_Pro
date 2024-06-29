import Image from "next/image";

const CoreValues = () => {
  let valuesData = [
    {
      logo: "/handshake.png",
      title: "Respect",
      subTitle:
        "Set trends for your peers and the industry in general to follow.",
    },
    {
      logo: "/diamond.png",
      title: "Exceptional Value",
      subTitle:
        "Set trends for your peers and the industry in general to follow.",
    },
    {
      logo: "/authenticity.png",
      title: "Authenticity",
      subTitle:
        "Set trends for your peers and the industry in general to follow.",
    },
    {
      logo: "/leadership.png",
      title: "Leadership",
      subTitle:
        "Set trends for your peers and the industry in general to follow.",
    },
  ];

  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="w-full my-8 p-3 ">
      <div className="w-[80%] mx-auto flex flex-col justify-between gap-4">
        <div className="w-full mt-6 ">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            Our core values
          </h1>
          <p className="text-start my-5">
            TechMomentum is your gateway to professional growth and success in
            the digital age. Our comprehensive courses cover the latest trends
            in technology, digital marketing, and business innovation, providing
            you with the expertise to stay ahead of the curve. Join us and
            embark
          </p>
        </div>
        <div className="w-full flex justify-between gap-2 py-10">
          <div className="w-[60%] flex flex-wrap">
            {valuesData.map((val, index) => {
              return (
                <div key={index} className="w-1/2  mt-4 ">
                  <div className="w-[80px] h-[80px]">
                    <Image
                      src={val.logo}
                      alt={val.title}
                      width={100}
                      height={100}
                      style={imgStyling}
                    />
                  </div>
                  <div className="border-b-2 border-slate-400 w-[85%]">
                    <h1 className="font-semibold text-lg my-3">{val.title}</h1>
                    <p className="my-3 text-start text-sm">{val.subTitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[40%] my-auto">
            <Image
              src="/chess-bg.png"
              alt="chessBg"
              width={200}
              height={200}
              style={imgStyling}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
