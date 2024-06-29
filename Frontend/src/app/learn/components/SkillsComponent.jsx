import Image from "next/image";

const Skills = ({}) => {
  let SkillsData = [
    "MS Excel",
    "RISK MANAGEMENT",
    "CLOUD SECURITY",
    "INCIDENT RESPONSE",
    "INCIDENT RESPONSE",
    "RISK MANAGEMENT",
    "SECURITY CONTROL DESIGN",
    "SECURITY CONTROL DESIGN",
    "INCIDENT RESPONSE",
    "SECURITY CONTROL DESIGN",
  ];
  let toolsData = [
    { logo: "wireshark", title: "Wireshark" },
    { logo: "nmap", title: "NMap" },
    { logo: "wazuh", title: "WAZUH" },
    { logo: "ophcrack", title: "Ophcrack" },
    { logo: "windows-event-log", title: "Windows Event Log" },
    { logo: "wazuh", title: "WAZUH" },
    { logo: "nessus", title: "Nessus" },
    { logo: "jhon-the-riper", title: "Jhon the Ripper" },
    { logo: "burp-suite", title: "BurpSuite" },
    { logo: "meta-sploit", title: "Metasploit" },
    { logo: "wazuh", title: "WAZUH" },
    { logo: "burp-suite", title: "BurpSuite" },
  ];
  return (
    <div className={"w-[100%] mx-auto my-20 flex flex-col gap-8"}>
      {/* Skills You will learn section */}
      <div className="w-[80%] mx-auto my-6 flex flex-col gap-3 justify-between">
        <div>
          <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-3xl tracking-wider mb-3">
            Skills you will learn
          </h1>
        </div>
        <div className="w-full flex gap-6 flex-wrap">
          {SkillsData.map((val, index) => {
            return (
              <p
                key={index}
                className="py-1 px-3 bg-[#002358] text-white rounded-md"
              >
                {val}
              </p>
            );
          })}
        </div>
      </div>

      {/* Learn Top in Demand Tools Section */}
      <div className="w-[80%] mx-auto flex my-6 flex-col justify-between">
        <div className="flex flex-col">
          <h1 className="text-[#0466C1] uppercase py-4 text-start font-semibold text-3xl tracking-wider mb-3">
            Learn Top in Demand Tools
          </h1>
          <p>
            Delve deep into Cyber Security with our programme, mastering
            significant skills and employing powerful tools to fortify digital
            defenses.
          </p>
        </div>
        <div className=" flex flex-wrap gap-6 my-8 leading-5 ">
          {toolsData.map((val, index) => {
            return (
              <div
                key={index}
                className="w-[170px] flex items-center justify-between"
              >
                <Image width={70} height={70} style={{width: "60px", height: "60px"}} src={`/${val.logo}.png`} alt={val.logo} />
                <h6 key={index} className="py-1 px-3 text-black rounded-md">
                  {val.title}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
