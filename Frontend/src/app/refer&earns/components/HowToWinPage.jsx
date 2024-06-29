import Image from "next/image";

const HowToWinPage = () => {
  return (
    <div className="w-full mx-auto p-6 flex flex-col mt-6">
      <h1 className="w-[80%] text-2xl my-3 mx-auto uppercase text-[#0466C1] font-bold">
        How can everybody win rewards?
      </h1>
      <div className="w-[80%] mx-auto flex flex-col my-3">
        {/* How will i win reward */}
        <div className="w-1/2 flex flex-col items-start border-r-2 relative  border-[#78B6FF]">
          <Image
            width={20}
            height={20}
            src="/blue-point.png"
            alt="point"
            className="absolute top-0 left-[578px]"
          />
          <h2 className="text-xl tracking-wide font-semibold pb-4">
            How will I win Rewards upon Referral?
          </h2>
          <p className="w-[80%] text-start text-sm text-slate-600">
            Refer GUVI&apos;s AI for India Program 2.0 to your friends, & when
            they sign-up to GUVI for enrolling to this event, then Your referral
            sign-up count increases. You&apos;d win multiple amazing gifts like
            Amazon Gift Vouchers, Discount coupons & GUVI premium passes based
            on your referral sign-up count.
          </p>
        </div>

        {/* How does this benefit my friend */}
        <div className="w-full flex justify-end">
          <div className="flex ps-20 w-1/2 flex-col items-start border-l-2  relative border-[#78B6FF]">
            <Image
              width={20}
              height={20}
              src="/blue-point.png"
              alt="point"
              className="absolute top-0 left-[-10px]"
            />
            <h2 className="text-xl tracking-wide font-semibold pb-4 ">
              How does this benefit my Friends?
            </h2>
            <p className="w-[80%] text-start text-sm text-slate-600">
              Your friends can sign-up to GUVI&apos;s AI for India Program 2.0
              and get amazing opportunity to participate in India&apos;s largest
              virtual AI Event in collaboration with The Ministry of Skill
              Development & Entrepreneurship. You get will Certificate by the
              Ministry of Skill Development & Entrepreneurship of India and also
              Internship Opportunities for Best Performers in the Grand 1-Day
              Virtual Event of AI-for-India 2.0.
            </p>
          </div>
        </div>

        {/* Celebrate the reward with friend*/}
        <div className="flex justify-start">
          <div className="flex w-1/2 flex-col items-start relative">
            <Image
              width={20}
              height={20}
              src="/blue-point.png"
              alt="point"
              className="absolute top-0 left-[578px]"
            />
            <h2 className="text-xl tracking-wide font-semibold pb-4 ">
              Celebrate the Rewards together with Friends
            </h2>
            <p className="w-[80%] text-start text-sm  text-slate-600">
              Now you’d win Amazon Gift Vouchers, GUVI Premium Passes & more
              based on your referral sign-up count. While your friends will get
              Certificate by the Ministry of Skill Development &
              Entrepreneurship of India and also Internship Opportunities for
              Best Performers in the Grand 1-Day Virtual Event of AI-for-India
              2.0. Isn’t this referral program a Win-Win solution for all?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWinPage;
