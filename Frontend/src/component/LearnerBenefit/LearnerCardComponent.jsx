import Image from "next/image";
import styles from "./learner.module.css";

const LearnerCardComponent = ({
  title,
  pointsData,
  img,
  reverse,
  id,
  positionClass,
}) => {
  return (
    <>
      <div
        className={`w-[60%] h-[300px] border-4 border-[#85C4FF] rounded-2xl p-2 absolute ${positionClass}`}
      >
        <div
          className={`bg-white rounded-lg flex ${
            reverse ? "flex-row-reverse" : "flex-row"
          } justify-between h-full p-3 border-2 border-[#85C4FF]`}
        >
          <div className={`flex flex-col  items-between`}>
            <h2 className="uppercase text-lg text-[#3E94FA] font-bold ps-2">
              {title}
            </h2>
            <ul
              className={`flex flex-col justify-start mb-4 ${styles.customList} ps-6`}
            >
              {pointsData.map((pt, index) => {
                return (
                  <li className="list-disc text-md ms-3" key={index}>
                    {pt}
                  </li>
                );
              })}
            </ul>
            <button className="text-black ms-3  w-[60%] text-sm font-semibold cursor-pointer py-2 px-4 bg-[transparent] h-[42px] rounded box-border flex  items-center justify-center whitespace-nowrap border-[1px] border-solid border-black hover:bg-[#0c8ce9] hover:text-white hover:border-0">
              <span className="w-full me-2">Explore Job Bootcamp</span>
              <span className="ml-2 font-semibold text-2xl w-full">›</span>
            </button>
          </div>
          <div className="w-[300px] h-[250px]">
            <Image
              width={300}
              height={250}
              style={{objectFit: "cover" , width: "100%", height: "100%", borderRadius: "5px" }}
              src={`/${img}.png`}
              alt={img}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnerCardComponent;
