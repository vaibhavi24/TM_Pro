const Stats = () => {
  return (
    <div className="w-full flex items-center justify-center my-10 p-3">
      <div className="w-[75%] bg-[#0047B2] p-5 text-white rounded-lg flex justify-around">
        <div>
          <h1 className="text-3xl text-center font-semibold mb-3">100k+</h1>
          <p className="text-lg">Learners</p>
        </div>
        <div>
          <h1 className="text-3xl text-center font-semibold mb-3">400+</h1>
          <p className="text-lg">Hiring Partners</p>
        </div>
        <div>
          <h1 className="text-3xl text-center font-semibold mb-3">200+</h1>
          <p className="text-lg">Core Skills</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
