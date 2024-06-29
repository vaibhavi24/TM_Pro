import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className={`w-[100%] h-[100%] self-stretch bg-black overflow-hidden flex items-start justify-center gap-[90px] max-w-full text-left text-xl text-white`}
    >
      <div className="w-[80%]  mx-auto flex-col items-center justify-between gap-3 min-w-[543px] max-w-full py-8">
        {/* Logo and SearchBar div */}

        <div className="flex items-center justify-between mb-16">
          <a href="/">
            <Image
              width={300}
              height={200}
              style={{ width: "auto", height: "auto" }}
              className="w-[348.3px] relative max-h-full max-w-full"
              alt=""
              src="/tm-logo.svg"
            />
          </a>
          <div className="h-[2.5rem] w-[40%] flex items-center">
            <input
              type="text"
              className="bg-transparent text-sm text-white border-t-2 border-b-2 border-l-2 border-slate-400 rounded-l-md h-full w-[80%] p-4 "
              placeholder="Search"
            />
            <button className="bg-white font-semibold text-black h-full w-[20%] rounded-r-md ">
              Search
            </button>
          </div>
        </div>

        {/* contact us div */}

        <div className=" flex items-center justify-between ">
          <div className="flex flex-col items-start justify-center mb-10 gap-[28px] text-[17px] ">
            <h2 className="font-semibold text-lg">Contact us</h2>
            <div className="  flex flex-col items-start justify-center gap-[13px]">
              <a href="tel:1800-123-3598">1800-123-3598</a>
              <a href="">contact@techmomentum.com</a>
              <p className="">
                <span className="block">© 2024 TechMomentum</span>
                <span className="block">Education Private Limited.</span>
              </p>
              <div className="mt-2">
                <button className="me-2">
                  <Image
                    width={30}
                    height={30}
                    className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                    loading="lazy"
                    alt=""
                    src="/facebookfill-3.svg"
                  />
                </button>
                <button className="mx-2">
                  <Image
                    width={30}
                    height={30}
                    className="w-[29.8px] h-[29.8px] relative"
                    loading="lazy"
                    alt=""
                    src="/instagram-square.png"
                  />
                </button>
                <button className="mx-2">
                  <Image
                    width={30}
                    height={30}
                    className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                    loading="lazy"
                    alt=""
                    src="/youtubefill-3.svg"
                  />
                </button>
                <button className="mx-2">
                  <Image
                    width={30}
                    height={30}
                    className="h-[34px] w-[34px] relative rounded-xl overflow-hidden shrink-0 min-h-[34px]"
                    loading="lazy"
                    alt=""
                    src="/linkedin-round.png"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center mt-6 gap-[28px] ">
            <h2 className="font-semibold">Tech Momentum</h2>
            <div className="  flex flex-col items-start justify-center gap-[13px] text-[17px]">
              <a href="#">Careers</a>
              <a href="#">Privacy Plicy</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Pricing & refund policy</a>
              <a href="#">Bug Bounty</a>
              <a href="#">Review</a>
              <a href="#">Press release</a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center mb-10 gap-[28px] ">
            <h2 className="font-semibold ">Courses</h2>
            <div className="  flex flex-col items-start justify-center gap-[13px] text-[17px]">
              <a href="#">Digital Marketing</a>
              <a href="#">Full Stack Development - Java</a>
              <a href="#">Data Science With Python</a>
              <a href="#">Data Science With Ai And Ml</a>
              <a href="#">Full Stack Development - MERN</a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center mb-10 gap-[28px] ">
            <h2 className="font-semibold ">Community</h2>
            <div className="  flex flex-col items-start justify-center gap-[13px] text-[17px]">
              <a href="#">Events</a>
              <a href="#">Campus Ninja</a>
              <a href="#">Affiliate</a>
              <a href="#">Scholarship events</a>
              <a href="#">Hire from us</a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center mb-10 gap-[28px] ">
            <h2 className="font-semibold ">Products</h2>
            <div className="  flex flex-col items-start justify-center gap-[13px] text-[17px]">
              <a href="#">Upskilling Courses</a>
              <a href="#">Job Bootcamp</a>
              <a href="#">Coding Ninjas Studio</a>
              <a href="#">Try courses for free</a>
              <a href="#">Mock interviews</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
