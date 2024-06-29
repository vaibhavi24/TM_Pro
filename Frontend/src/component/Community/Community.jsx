import Image from "next/image";

const Community = () => {
  let imgStyling = {
    objectFit: "cover",
    width: "300px",
    height: "100px"
  }
  return (
    <div className="w-[100%] p-8 bg-[#212121]">
      <div className="w-[80%] mx-auto flex gap-2 p-7 ">
        <div className="w-1/2 flex flex-col justify-center gap-8">
          <h1 className="text-4xl font-semibold text-[#0ADE53] ">
            Learning is Better with TechMomentum Community
          </h1>
          <p className="text-white text-lg font-medium">
            Join a community of serious & passionate tech folks, students,
            mentors and coaches your career.
          </p>
          <button className="w-[60%] flex justify-center items-center border-2 border-white rounded-lg p-2 text-black text-sm font-semibold cursor-pointer  hover:bg-[#0c8ce9] hover:text-white hover:border-0">
            <div className="">
              <Image
                width={40}
                height={40}
                src="/WhatsappFrame.png"
                alt="whatsapp-logo"
              />
            </div>
            <div className="">
              <p className="font-semibold text-white">
                Join WhatsApp Community
              </p>
            </div>
          </button>
        </div>
        <div className="w-1/2 flex items-start justify-center text-3xl h-[450px] relative">
          <Image
              width={500}
              height={500}
              style={{width: "450px", height: "450px"}}
              src="/WhatsApp.png"
              alt="whatsapp-logo"
              className="h-full "
            />
          <div className="absolute top-[20%] left-6  flex flex-col">
              <div className="">
                <Image width={380} height={300} src="/steve4.png" alt="communityImg" className="w-[50%]" />
              </div>
              <div className="flex justify-end">
                <Image width={380} height={300} src="/steve3.png" alt="communityImg" className="w-[50%] me-2" />
              </div>
              <div className="">
                <Image width={380} height={300} src="/steve1.png" alt="communityImg" className="w-[50%] " />
              </div>
              <div className="flex justify-end">
                <Image width={380} height={300} src="/steve2.png" alt="communityImg" className="w-[50%] " />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
