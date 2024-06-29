import Image from "next/image";

const IndustryProjectComponent = ({}) => {
  let popularToolsData = [
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
  ];
  let latestToolsData = [
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
    {
      title1: "Network Protocol Analysis",
      title2: "Wireshark Packet Analysis",
      content:
        "Learners will analyze the SSL certificate of a website to extract details of the certificate fingerprints, validity and certificate levels.",
      points: [
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
        "Learners will analyze the SSL certificate",
      ],
      icons: [
        "rectangle1",
        "rectangle2",
        "rectangle3",
        "rectangle4",
        "rectangle1",
        "rectangle2",
      ],
    },
  ];

  return (
    <div className="w-[100%] mx-auto my-10 gap-3">
      <div className="w-[80%] mx-auto my-8">
        <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-3xl tracking-wider mb-3">
          Work on industry-relevant projects
        </h1>
        <p className="text-sm ">
          Find below an indicative list of hands-on projects during the course
          of the program
        </p>
      </div>

      {/* Master Popular Tools Section */}
      <div className="w-[80%] flex flex-col mx-auto my-16">
        <h3 className="uppercase text-xl mt-4 mb-10 font-semibold text-[#0466C1]">
          Master the popular tools
        </h3>
        <div className="w-full flex flex-wrap gap-3 leading-normal">
          {/*  */}
          {popularToolsData.map((pt, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 border-2 rounded-lg w-[600px] p-3"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-start gap-2 ">
                    <Image
                      width={50}
                      height={50}
                      style={{ width: "50px", height: "50px" }}
                      src="/wireshark.png"
                      alt="wireshark"
                      className="w-8 h-8 "
                    />
                    <h6 className="uppercase text-lg font-semibold text-black tracking-[2px]">
                      {pt.title1}
                    </h6>
                  </div>
                  <h1 className="uppercase text-xl  font-semibold text-[#03006D] tracking-wider">
                    {pt.title2}
                  </h1>
                  <p className="text-[17px]">{pt.content}</p>
                  <ul className="ps-3 text-sm">
                    {pt.points.map((pt, index) => {
                      return (
                        <li key={index} className="list-disc">
                          {pt}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-wrap">
                  {pt.icons.map((i, index) => {
                    return (
                      <div key={index}>
                        <Image
                          width={50}
                          height={50}
                          style={{ width: "50px", height: "50px" }}
                          src={`/${i}.png`}
                          alt={i}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/*  */}
        </div>
      </div>

      {/* Master Latest Tools Section */}
      <div className="w-[80%] mx-auto my-16">
        <h3 className="uppercase text-xl my-10 font-semibold text-[#0466C1]">
          Master the latest tools
        </h3>
        <div className="w-full flex flex-wrap gap-3 leading-normal">
          {/*  */}
          {latestToolsData.map((pt, index) => {
            return (
              <div
                key={index}
                className="flex gap-3 border-2 rounded-lg w-[600px] p-3"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-start gap-2 ">
                    <Image
                      width={50}
                      height={50}
                      style={{ width: "50px", height: "50px" }}
                      src="/wireshark.png"
                      alt="wireshark"
                      className="w-8 h-8 "
                    />
                    <h6 className="uppercase text-lg font-semibold text-black tracking-[2px]">
                      {pt.title1}
                    </h6>
                  </div>
                  <h1 className="uppercase text-xl  font-semibold text-[#03006D] tracking-wider">
                    {pt.title2}
                  </h1>
                  <p className="text-[17px]">{pt.content}</p>
                  <ul className="ps-3 text-sm">
                    {pt.points.map((pt, index) => {
                      return (
                        <li key={index} className="list-disc">
                          {pt}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-wrap">
                  {pt.icons.map((i, index) => {
                    return (
                      <div key={index}>
                        <Image
                          width={50}
                          height={50}
                          style={{ width: "50px", height: "50px" }}
                          src={`/${i}.png`}
                          alt={i}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default IndustryProjectComponent;
