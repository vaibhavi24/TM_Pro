import Link from "next/link";
import "../style.css";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <div id="socialMedia" className="w-full mt-8 relative">
      <Image width={500} height={300}
        src="/socialBg.png"
        alt="socialBg"
        className="w-full h-full object-cover"
      />

      {/* grid structure */}
      <div className="w-[70%] absolute top-[20%] left-[10%] text-white">
        <div className="grid grid-cols-3  p-4">
          <div className="gradient_border_right col-span-2 box-border flex flex-col justify-center ps-16 pb-10">
            <p className="font-semibold text-lg uppercase mb-5">
              Explore us more at
            </p>
            <div className="w-full flex justify-end ">
              <h1 className="uppercase font-semibold tracking-wider text-4xl text-wrap w-1/2">
                Social <span className="block pt-5">Media</span>
              </h1>

              {/* Youtube */}
              <Link href={"#"}>
                <div className=" flex items-start gap-2">
                  <Image width={100} height={100}
                    src="/youtube-round.png"
                    alt="youtubeLogo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col justify-between">
                    <h2 className="text-lg font-semibold mb-3">
                      Techmomentum_Learning
                    </h2>
                    <p className="text-start text-sm w-[75%]">
                      Explore Our YouTube Channel for New Videos,Course Series &
                      Shorts
                    </p>
                    <span className=" w-[65%] text-4xl flex justify-end">
                      ›
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col ">
            {/* Linkedin */}
            <Link href={"#"}>
              <div className="p-4 flex items-start gap-2">
                <Image width={100} height={100}
                  src="/linkedin-round.png"
                  alt="linkedinLogo"
                  className="w-16 h-16"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-lg font-semibold mb-3">
                    Techmomentum_Learning
                  </h2>
                  <p className="text-start text-sm">
                    Explore Our YouTube Channel for New Videos,Course Series &
                    Shorts
                  </p>
                  <span className="  text-4xl flex justify-end">›</span>
                </div>
              </div>
            </Link>

            {/* Instagram */}
            <Link href={"#"}>
              <div className="p-4 gradient_border_top">
                <div className="flex items-start gap-2">
                  <Image width={100} height={100}
                    src="/instagram-round.png"
                    alt="instagramLogo"
                    className="w-16 h-16"
                  />
                  <div className="flex flex-col justify-between">
                    <h2 className="text-lg font-semibold mb-3">
                      Techmomentum_Learning
                    </h2>
                    <p className="text-start text-sm">
                      Explore Our YouTube Channel for New Videos,Course Series &
                      Shorts
                    </p>
                    <span className=" text-4xl flex justify-end">›</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
