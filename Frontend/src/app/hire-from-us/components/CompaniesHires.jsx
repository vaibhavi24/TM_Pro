import Image from "next/image";

const CompaniesHires = () => {
  return (
    <div className="w-[100%] my-16 p-3">
      <div className="w-[80%] mx-auto">
        <h2 className="my-8 uppercase text-3xl text-[#0466C1] font-bold ">
          Companies who hire from us
        </h2>
        <div className="w-[100%] mx-auto flex items-start gap-4 justify-between ">
          <div className="w-1/2 flex flex-col gap-3">
            <div className="w-[90%]">
              <p className="text-start text-md mb-3">
                In this quiz, you will be tested on Core Java basics and OOPS
                concepts. There are some code snippets too to test your basic
                Java coding
              </p>
              <ul className="list-disc marker:text-4xl mb-10 ps-6">
                <li>
                  In this quiz, you will be tested on Core Java basics and OOPS
                  concepts
                </li>
                <li>
                  In this quiz, you will be tested on Core Java basics and OOPS
                  concepts
                </li>
                <li>
                  In this quiz, you will be tested on Core Java basics and OOPS
                  concepts
                </li>
              </ul>
            </div>

            <button className="text-black text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] w-[250px] h-[42px] rounded box-border flex  items-center justify-center gap-3 whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span className="w-full ">Join us as a Hiring Partner</span>
              <span className="mr-6 font-semibold text-2xl w-full">›</span>
            </button>
          </div>
          <div className="w-1/2 flex items-start">
            <div className="flex flex-wrap justify-between items-start w-full ">
              {[
                "google",
                "ibm",
                "asana",
                "meta",
                "oracle",
                "mailgun",
                "google",
                "ibm",
                "asana",
                "mention",
                "pixijs",
                "amazon",
              ].map((val, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center w-[30%] h-14 mb-10 gap-3"
                  >
                    <Image
                      width={200}
                      height={100}
                      style={{ width: "100%", height: "100%" }}
                      src={`/${val}.png`}
                      alt="Logo 1"
                      className="h-auto w-auto "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesHires;
