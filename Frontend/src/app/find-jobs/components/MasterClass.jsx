import CourseCard from "./CourseCardComponents";

const MasterClass = ({ masterClassData }) => {
  if (!masterClassData) {
    return <p className="w-[80%] mx-auto">Loading...</p>;
  }

  let { Title, SubTitle, masterClass } = masterClassData;
  return (
    <>
      <div
        id="master-class"
        className="w-[100%] mx-auto self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[17.7px] box-border max-w-full text-dodgerblue my-4"
      >
        <div className="w-[90%] flex flex-col items-start justify-start gap-[31px] max-w-full mq900:gap-[15px]">
          <h1 className=" leading-[47px] uppercase  max-w-full text-[#0466C1] text-start font-bold text-3xl tracking-wider">
            {Title}
          </h1>
          <p className="m-0 self-stretch relative text-lg text-gray-1700">
            {SubTitle}
          </p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[90%] mx-auto h-[650px]  grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(345px,_1fr))] ">
          {masterClass.map((mc, index) => {
            return <CourseCard key={index} courseData={mc} />;
          })}
        </div>
      </div>
      <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border my-6">
        <button className="p-7 bg-[transparent] h-[42px] rounded-xl box-border flex text-black items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
          <span className="">View All Masterclasses</span>
          <span className="ml-2 font-semibold text-2xl ">›</span>
        </button>
      </div>
    </>
  );
};

export default MasterClass;
