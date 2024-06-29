const ProvideProgram = () => {
  let programData = [
    "Digital Marketing",
    "Data Science",
    "Design",
    "Cloud & DevOPs",
    "Development",
    "Cyber Security",
    "AI & ML",
    "Testing",
  ];
  return (
    <div className="w-full my-8 p-3">
      <div className="w-[80%] mx-auto">
        <div className="my-6">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            programs we provide
          </h1>
          <p className="text-start my-5 ">
            With expertise in Digital, Engineering and Cloud, we deliver
            solutions that fulfill the traditional, transformational and future
            needs of clients across the globe.
          </p>
        </div>
        <div className="w-[80%] my-10 mx-auto flex flex-wrap gap-6 ">{programData.map((pd, index)=>{
            return <div key={index} className="px-10 py-3 rounded-md bg-[#C8E5FF]"><p className="font-semibold">{pd}</p></div>
        })}</div>
      </div>
    </div>
  );
};

export default ProvideProgram;
