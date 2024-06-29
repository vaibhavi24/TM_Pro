const SecondaryNavbar = () => {
  return (
    <header className="w-100 flex flex-wrap justify-around p-5">
      <div>
        <ul className="flex">
          <li className="px-3 font-semibold">
            <a href="/learn">Learn</a>
          </li>
          <li className="px-3 font-semibold">
            <a href="/job-preparation">Preparation</a>
          </li>
          <li className="px-3 font-semibold">
            <a href="/communities">Communities</a>
          </li>
          <li className="px-3 font-semibold">
            <a href="/success-stories">Success Stories</a>
          </li>
          <li className="px-3 font-semibold">
            <a href="/master-class">Master Class</a>
          </li>
          <li className="px-3 font-semibold">
            <a href="/resources">Resources</a>
          </li>
          <li className="px-3 font-semibold">
            <a href="/road-map">Roadmaps</a>
          </li>
        </ul>
      </div>
      <button className="bg-white px-5 py-1 border-2 border-black rounded-md ">
        Login
      </button>
    </header>
  );
};

export default SecondaryNavbar;
