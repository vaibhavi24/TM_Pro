import Image from "next/image";
import Link from "next/link";

const HelpSection = () => {
  let contactDetails = [
    {
      title: "Enquire now",
      mailId: "enquiry@techmomentum.in",
      phone: "+91 842-143-2551",
    },
    {
      title: "for grievance",
      mailId: "enquiry@techmomentum.in",
      phone: "+91 842-143-2551",
    },
    {
      title: "For Corporate",
      mailId: "enquiry@techmomentum.in",
      phone: "+91 842-143-2551",
    },
  ];
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }
  return (
    <section id="helpYou" className="w-full my-10 py-8">
      <h1 className="w-[80%] mx-auto uppercase text-3xl text-[#78B6FF] font-semibold mb-6">
        How can help you
      </h1>

        {/* content section */}
      <div className="w-[80%] flex justify-between mx-auto p-3">
        <div className="w-[55%] flex flex-col gap-8 pt-10">
          <div className="flex items-start justify-between gap-3">
            <Image width={100} height={100} src="/location.png" alt="location" className="w-6 h-6" />
            <p className="text-start text-[17px] tracking-wider">
              2nd Floor, Trident Tower, Mangalmurti Layout, near Kanhaiya Kunj
              Hotel, Mahesh Nagar, Guruchhaya Colony, Sai Nagar, Amravati,
              Maharashtra 444607
            </p>
          </div>
          <div className="flex justify-between items-center gap-2">
            {contactDetails.map((ct, index) => {
              return (
                <div
                  key={index}
                  className="w-1/3 my-3 flex flex-col justify-between items-center border-[1px] border-slate-400 rounded-lg"
                >
                  <div className="w-full bg-[#03006D] px-6 py-2 text-white flex justify-center items-center">
                    {ct.title}
                  </div>
                  <a
                    type={`mailto:${ct.mailId}`}
                    className="w-full p-2 text-sm text-[#679AC8]"
                  >
                    {ct.mailId}
                  </a>
                  <p className="text-xl font-medium">{ct.phone}</p>
                </div>
              );
            })}
          </div>
          <div>
            <Image width={300} height={300} style={imgStyling}
              src="/buildings.png"
              alt="buildings"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Form section */}
        <div className="w-[40%] my-auto">
          <div>
            <p className="text-[#67ADFF] font-semibold text-xl uppercase mb-1">
              Request more information
            </p>
            <form className="flex flex-col justify-between items-center">
              <input
                type="text"
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Your full name"
              />
              <input
                type="text"
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Email"
              />
              <input
                type="text"
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Phone number"
              />
              <input
                type="text"
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Currently Pursing"
              />
              <input
                type="text"
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Year"
              />
              <input
                type="text"
                className="rounded-lg border-[1px] border-black p-3 w-full h-full my-3"
                placeholder="Course choose with TechMomentum"
              />
              <div className="flex justify-center items-center mt-8 mb-3">
                <button
                  type="submit"
                  className=" my-3bg-white max-h-10 px-10 gap-1 border-2 border-black rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0"
                >
                  <span>Enquire Now</span>
                  <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                    ›
                  </span>
                </button>
              </div>
              <p>
                By tapping submit, you agree to the{" "}
                <span className="text-[#3B82F0]">Terms & Conditions</span> and{" "}
                <span className="text-[#3B82F0]">Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
