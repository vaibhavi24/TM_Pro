import Link from "next/link";
import Image from "next/image";

const RewardsPage = () => {
  return (
    <div className="w-full mx-auto bg-black my-8 py-10 text-white">
      <div className="w-[80%] mx-auto flex flex-col justify-between gap-3 py-6">
        {/* Heading section */}
        <div className="w-full flex justify-between border-b-[1px] border-slate-400 pb-8">
          {/* content section */}
          <div className="w-1/2">
            <h1 className="text-[40px] text-[#78B6FF] text-wrap text-start tracking-wide font-semibold mb-6">
              Refer and Earn up to Rs. 80,000 for each friend who successfully
              enrolls!
            </h1>
            <p className="text-start text-[22px] text-slate-300 tracking-normal">
              Your family/friends enjoys the highest pre applied fee waiver of
              up to Rs 70,000/Free course if they enroll using your referral
              code!
            </p>
          </div>

          {/* Signup section */}
          <div className="w-1/2 flex justify-end">
            <div className="w-[70%] bg-slate-700 rounded-md p-6 flex justify-center">
              <div className="w-[80%] flex flex-col items-center justify-between">
                <div className="mb-10">
                  <h2 className="text-[#78B6FF] text-center text-3xl mb-8">
                    Sign Up to Earn
                  </h2>

                  {/* points section */}

                  <div className="flex justify-center gap-4 mx-auto mb-3">
                    <Image
                      width={10}
                      height={10}
                      src="/yellow-star.png"
                      alt="star"
                      className="w-6 h-6"
                    />
                    <p className="text-start">
                      Earn 50% reward in advance once referee registers for a
                      course *
                    </p>
                  </div>
                  <div className="flex justify-center gap-4 mx-auto mb-3">
                    <Image
                      width={10}
                      height={10}
                      src="/yellow-star.png"
                      alt="star"
                      className="w-6 h-6"
                    />
                    <p className="text-start">
                      Earn 50% reward in advance once referee registers for a
                      course *
                    </p>
                  </div>
                </div>

                {/* button section */}
                <button className="bg-transparent text-white max-h-10 p-4 gap-1 border-2 border-white rounded-md flex items-center font-semibold hover:bg-[#0c8ce9] hover:text-white hover:border-0">
                  <span>Start Referring</span>
                  <span className="ml-2 font-semibold text-2xl pb-[2px] flex items-start">
                    ›
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* T&C section */}
        <div className="w-full h-[300px] mt-4 bg-white rounded-lg p-4 text-black flex flex-col justify-between gap-4">
          <div className="flex justify-between p-6">
            {/* Signup & Share */}
            <div className="w-[23%] h-full flex flex-col justify-between items-center ">
              <Image
                width={40}
                height={40}
                style={{width: "auto", height: "auto"}}
                src="/sent-icon.png"
                alt="sent-icon"
                className="w-[50px] h-[50px] pb-2"
              />
              <h2 className="text-xl ">Sign up & Share</h2>
              <p className="text-center text-sm text-wrap">
                Earn 50% reward in advance once referee registers for a course *
              </p>
            </div>

            {/* Right arrow */}
            <div className="flex items-center justify-center">
              <Image
                width={40}
                height={40}
                style={{width: "auto", height: "auto"}}
                src="/arrow-right.png"
                alt="right-arrow"
              />
            </div>

            {/* Earn Advance Payment */}
            <div className="w-[23%] h-full flex flex-col justify-between items-center ">
              <Image
                width={40}
                height={40}
                src="/money-icon.png"
                alt="money icon"
                className="w-[50px] h-[50px] mb-3"
              />
              <h2 className="text-xl mb-3">Earn Advance Payment</h2>
              <p className="text-center text-sm text-wrap">
                You are eligible for 50% referral benefit after your friend
                successfully makes full payment for the program{" "}
              </p>
            </div>

            {/* Right arrow */}
            <div className="flex items-center justify-center">
              <Image
                width={40}
                height={40}
                style={{width: "auto", height: "auto"}}
                src="/arrow-right.png"
                alt="right-arrow"
              />
            </div>

            {/* Earn final payment */}
            <div className="w-[23%] h-full flex flex-col justify-between items-center ">
              <Image
                width={40}
                height={40}
                src="/money-pouch.png"
                alt="money pouch"
                className="w-[50px] h-[50px] mb-3"
              />
              <h2 className="text-xl mb-2"> Earn Final Payment</h2>
              <p className="text-center text-sm text-wrap">
                You are eligible for remaining payout as when the program starts
                for your friend
              </p>
            </div>
          </div>

          <p className="text-center">
            Refer T&C{" "}
            <Link href="#" className="text-blue-400">
              Click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
