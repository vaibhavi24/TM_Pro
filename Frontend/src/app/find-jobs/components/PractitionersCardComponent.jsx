import Image from "next/image";

const PractitionersCardComponent = ({ practitionerData, isCompany }) => {
  if (!practitionerData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }

  let { name, position, company, profileImage } = practitionerData;

  
  return (
    <div
      className={`h-[443px] w-[97%] shrink-0 flex flex-row items-end justify-start  gap-4  box-border relative text-left text-xl text-gray-1900 font-sub-heading `}
    >
      <div className="h-[423px] w-[calc(100%_+_4px)] absolute !m-[0] top-[0px] right-[-4px] left-[0px] [backdrop-filter:blur(80px)] rounded-3xl box-border border-[2px] border-solid border-white" />
      <Image width={300} height={500}
        className="h-[399px] w-[calc(100%_-_18px)] absolute !m-[0] top-[10px] right-[9px] left-[9px] rounded-xl max-w-full overflow-hidden object-cover z-[1]"
        alt=""
        src={profileImage}
      />
      {isCompany ? (
        <>
          <div className=" w-[152px] flex flex-col items-center justify-between gap-4 relative top-[-50px] left-[20%]">
            <div className=" h-[54px] text-white flex flex-col items-center justify-between z-[2] ">
              <b className=" h-[30px] relative font-semibold text-center">
                {name}
              </b>
              <div className=" flex-1 flex items-start justify-center text-base">
                <div className=" flex-1 relative text-center font-medium">
                  {position}
                </div>
              </div>
            </div>
          </div>
          <div className=" ml-[-129px] text-black rounded-lg bg-white z-[2]">
            <p className="w-[150px] h-[47px] flex items-center justify-center">
              {company}
            </p>
          </div>
        </>
      ) : (
        <div className="absolute w-[75%] flex justify-center items-center top-[85%] left-[12%] p-1 bg-white z-[2] rounded-md  text-black">
          <div>
            <h1 className="font-semibold text-[18px]">{name}</h1>
            <h3 className="text-[15px]">{position}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default PractitionersCardComponent;
