import Image from "next/image";
import DropDown from "../find-jobs/components/DropDownComponents";

const FaqComponentPage = () => {
  let faqQuestions = [
    {
      question: "Why Join TechMomentum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question: "What is the eligibility criteria to join TechMomentum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question:
        "Do i need to have particular software or laptop to attend offline class?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question:
        "Do i need to have particular software or laptop to attend offline class?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question: "How is TechMonentum is different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
    {
      question:
        "How long will students have access to the course materials once they have finish the courses?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    },
  ];
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center  box-border max-w-full text-left text-xl text-gray-400 font-sub-heading mq900:pb-[77px] mq900:box-border mq450:pb-[50px] mq450:box-border p-[5rem]`}
    >
      <div className="w-[90%]  flex flex-row items-start justify-center gap-[50.7px] max-w-full">
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-[#0466C1] text-start font-bold text-4xl tracking-wider mb-10">
            FAQ&apos;s
          </h1>
          <Image
          width={390}
          height={390}
            className="w-[70%] relative max-h-[70%] object-contain min-h-[40%] max-w-full mq1275:flex-1"
            loading="lazy"
            alt=""
            src="/rectangle-34765@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[24px] min-w-[545px] max-w-full mq900:min-w-full">
          {faqQuestions.map((q, index) => {
            return <DropDown key={index} questions={q.question} answer={q.answer}/>;
          })}
        </div>
      </div>
    </section>
  );
};


export default FaqComponentPage;
