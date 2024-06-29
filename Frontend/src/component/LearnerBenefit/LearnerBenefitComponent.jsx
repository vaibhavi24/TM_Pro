import Image from "next/image.js";
import Card from "./LearnerCardComponent.jsx";

const LearnerBenefitComponent = () => {
  let cardsData = [
    {
      title: "Learn, Practise & Assesment",
      points: [
        "Top 55 Interview Questions and Answers",
        "Boost chances of selection.",
        "Well-structured set of interview questions",
        "Online test for interview preparation",
      ],
      img: "benefitsImg1",
    },
    {
      title: "Extra Edge to Standout",
      points: [
        "Top 55 Interview Questions and Answers",
        "Boost chances of selection.",
        "Well-structured set of interview questions",
        "Online test for interview preparation",
      ],
      img: "rectangle-34666-1@2x",
    },
    {
      title: "Interview Preparation & Placement",
      points: [
        "Top 55 Interview Questions and Answers",
        "Boost chances of selection.",
        "Well-structured set of interview questions",
        "Online test for interview preparation",
      ],
      img: "rectangle-34666-2@2x",
    },
  ];

  return (
    <>
      <section className="w-[100%] h-auto py-[30px] my-10">
        <div className="w-[80%] mx-auto flex flex-col gap-[20px]">
          <h2 className="text-[24px] text-[#3E94FA] font-bold uppercase">
            Learner Benefits
          </h2>
          <p className="text-[16px]">
            Check out what sets us apart and makes our programs the best online
            training and certification courses in India
          </p>
        </div>
        <div className="w-[80%] mx-auto my-[150px] py-10 relative">
          <div className="flex justify-start">
            <Image
              width={60}
              height={60}
              style={{ width: "60px", height: "60px" }}
              src="/homeIcon.png"
              alt="home icon"
              className="absolute top-[2%] left-[-20px]"
            />
            <div className="h-[350px] w-[50%] border-l-4 border-y-4 border-[#85C4FF] mb-6"></div>
          </div>
          <div className="flex justify-end me-9 relative">
            <Image
              width={60}
              height={60}
              style={{ width: "60px", height: "60px" }}
              src="/certificateIcon.png"
              alt="certificate icon"
              className="absolute top-[-10%] right-[-20px]"
            />
            <div className="h-[350px] w-[50%] border-r-4 border-y-4 border-[#85C4FF] "></div>
          </div>
          {cardsData.map((dt, index) => {
            let positionClass;

            if (index === 0) {
              positionClass = "top-[-85px] right-[6%]";
            } else if (index === 1) {
              positionClass = "top-[250px] left-[5%]";
            } else if (index === 2) {
              positionClass = "top-[75%] right-[6%]";
            }
            return (
              <Card
                key={index}
                id={index}
                title={dt.title}
                reverse={index === 1}
                pointsData={dt.points}
                img={dt.img}
                positionClass={positionClass}
              />
            );
          })}
          {/*  */}

          {/* <div className="w-[60%] h-[300px] bg-blue-600  border-4 border-[#85C4FF] rounded-2xl p-2 absolute top-[250px] left-[5%]">
            div 2
          </div> */}
          {/* <div className="w-[60%] bg-green-600 h-[300px] border-4 border-[#85C4FF] rounded-2xl p-2 absolute top-[75%] right-[6%]">
            div 3
          </div> */}
        </div>
      </section>
    </>
  );
};

export default LearnerBenefitComponent;
