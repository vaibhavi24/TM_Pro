import Image from "next/image";

const AccelerateWithCommunity = () => {
  let profileStyle = {
    borderRadius: "50%",
    objectFit: "cover",
    width: "100px",
    height: "100px",
    marginBottom: "4px",
  };


  return (
    <div className="w-full my-10 py-8">
      <div className="w-[80%] mx-auto p-3">
        <div>
          <h1 className="text-2xl my-3 uppercase text-[#0466C1] font-bold">
            Accelerate with the TechMomentum Community
          </h1>
          <p className="mb-4">
            Explore network and grow with the community of most passionate tech
            folks
          </p>
          <button className="bg-white max-h-10 p-4 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0 my-6">
            <span>Discover more</span>
            <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
              ›
            </span>
          </button>
        </div>
        <div className="relative my-8 w-full h-[600px]">
          {/* Profile 1 */}
          <div className="absolute left-[40%] w-[200px] flex justify-center items-start">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={100}
                height={100}
                style={profileStyle}
                src="/rectangle-34782@2x.png"
                alt="profile"
              />

              {/* icon */}
              <Image
                width={50}
                height={50}
                style={{
                  width: "40px",
                  height: "48px",
                  position: "absolute",
                  top: "0px",
                  left: "75%",
                }}
                src="/highlight-sparkle.png"
                alt="sparkle"
              />

              <div className="flex items-center gap-3 w-full">
                {/* heading */}
                <h2 className="font-medium">UI / UX Designer</h2>

                {/* company */}
                <div className="w-[40px] h-[20px] pt-1">

                <Image
                  width={60}
                  height={20}
                  src="/infosys.png"
                  alt="infosys"
                  style={{ width: "auto", height: "auto"}}
                  />
                  </div>
              </div>
            </div>
          </div>

          {/* Profile 2 */}
          <div className="absolute h-[200px] top-[26%] left-[70%] w-[200px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={100}
                height={100}
                style={profileStyle}
                src="/profile2.png"
                alt="profile"
              />

              {/* icon */}
              <Image
                width={20}
                height={20}
                src="/icon2.png"
                alt="sparkle"
                className="w-16  h-16 absolute top-[-50px] left-[65%]"
              />

              <div className="flex justify-center items-center gap-3 w-full">
                {/* heading */}
                <h2 className="font-medium">Data Analyst</h2>

                {/* company */}
                <Image
                  width={60}
                  height={20}
                  style={{ width: "55px", height: "25px" }}
                  src="/deloitte.png"
                  alt="deloitte"
                  className="w-14 h-4 "
                />
              </div>
            </div>
          </div>

          {/* Profile 3 */}
          <div className="absolute h-[200px] top-[20%] left-[15%] w-[200px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={100}
                height={100}
                style={profileStyle}
                src="/profile3.png"
                alt="profile"
              />

              {/* icon */}
              <Image
                width={20}
                height={20}
                src="/icon3.png"
                alt="sparkle"
                className="w-[90px] h-[90px] absolute top-[-40px] left-[40%]"
              />

              <div className="flex gap-3 w-full">
                {/* heading */}
                <h2 className="font-medium">Dev Ops Engg</h2>

                {/* company */}
                <Image
                  width={60}
                  height={20}
                  style={{ width: "45px", height: "25px" }}
                  src="/tata.png"
                  alt="tata"
                />
              </div>
            </div>
          </div>

          {/* Profile 4 */}
          <div className="absolute h-[200px] top-[45%] left-[40%] w-[200px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={100}
                height={100}
                style={profileStyle}
                src="/profile4.png"
                alt="profile"
              />

              {/* icon */}
              <Image
                width={20}
                height={20}
                src="/sparkle-blue.png"
                alt="sparkle"
                className="w-14 h-14 absolute top-[-40px] left-[75%]"
              />

              <div className="flex items-center gap-3 w-full">
                {/* heading */}
                <h2 className="font-medium">Java Developer</h2>

                {/* company */}
                <Image
                  width={60}
                  height={20}
                  style={{ width: "65px", height: "30px" }}
                  src="/tcs.png"
                  alt="tata"
                />
              </div>
            </div>
          </div>

          {/* Profile 5 */}
          <div className="absolute h-[200px] top-[65%] left-[10%] w-[250px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={100}
                height={100}
                style={profileStyle}
                src="/profile5.png"
                alt="profile"
              />

              {/* icon */}
              <Image
                width={20}
                height={20}
                src="/icon5.png"
                alt="sparkle"
                className="w-20 h-20 absolute top-[-30px] left-[-50px]"
              />

              <div className="flex gap-3 w-full items-center">
                {/* heading */}
                <h2 className="font-medium pt-2">Data Analyst</h2>

                {/* company */}
                <Image
                  width={60}
                  height={20}
                  style={{ width: "75px", height: "30px" }}
                  src="/accenture.png"
                  alt="accenture"
                  className="w-16 h-5"
                />
              </div>
            </div>
          </div>

          {/* Profile 6 */}
          <div className="absolute h-[200px] top-[75%] left-[65%] w-[250px] flex justify-center items-end">
            <div className="relative flex flex-col justify-between items-center">
              {/* profile */}
              <Image
                width={100}
                height={100}
                style={profileStyle}
                src="/profile6.png"
                alt="profile"
              />

              {/* icon */}
              <Image
                width={20}
                height={20}
                src="/sparkle-green.png"
                alt="sparkle"
                className="w-12 h-12 absolute top-[80%] left-[-90px]"
              />
              <Image
                width={20}
                height={20}
                src="/icon6.png"
                alt="sparkle"
                className="w-12 h-12 absolute top-[80%] left-[210px]"
              />

              <div className="flex items-center gap-3 w-full">
                {/* heading */}
                <h2 className="font-medium">Quality Analyst</h2>

                {/* company */}
                <div className="w-[45px] h-[20px] pt-1">

                <Image
                  width={60}
                  height={20}
                  style={{width: "auto", height: "auto"}}
                  src="/google.png"
                  alt="Google"
                  className="w-14 h-5"
                  />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccelerateWithCommunity;
