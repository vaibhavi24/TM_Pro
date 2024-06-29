import Image from "next/image";

const WhyChooseusComponent = ({}) => {
  return (
    <section
      id="whychoose"
      className={`w-[100%] self-stretch bg-[#030A21] overflow-hidden flex flex-col items-center justify-start py-10 px-5 box-border gap-[60px] max-w-full text-left text-21xl text-cornflowerblue font-sub-heading`}
    >
      <div className="ps-10 self-stretch w-[90%] mx-auto flex flex-col items-start justify-start max-w-full text-white">
        <h1 className="text-[#78b6ff] pt-10 text-start font-bold text-4xl ">
          Why TechMomentum?
        </h1>
        <p className="py-5 self-stretch relative font-light text-gray-1400 tracking-wider">
          Whether you&apos;re looking to break into a new industry or want to
          stay updated with the latest in your industry - gain insights from
          experts with a wealth of experience in top companies.
        </p>
      </div>
      <div className="w-[90%] px-10 grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(4,_minmax(255px,_1fr))]">
        <Image
          width={300}
          height={350}
          className="relative rounded-5xs max-w-full overflow-hidden max-h-full object-contain min-h-[340px]"
          loading="lazy"
          alt=""
          src="/frame-76@2x.png"
        />
        <Image
          width={300}
          height={350}
          className="relative rounded-5xs max-w-full overflow-hidden max-h-full object-contain min-h-[340px]"
          loading="lazy"
          alt=""
          src="/frame-1000006043@2x.png"
        />
        <Image
          width={300}
          height={350}
          className="relative rounded-5xs max-w-full overflow-hidden max-h-full object-contain min-h-[340px]"
          loading="lazy"
          alt=""
          src="/frame-1000006044@2x.png"
        />
        <Image
          width={300}
          height={350}
          className="relative rounded-5xs max-w-full overflow-hidden max-h-full object-contain min-h-[340px]"
          loading="lazy"
          alt=""
          src="/frame-1000006045@2x.png"
        />
      </div>
    </section>
  );
};

export default WhyChooseusComponent;
