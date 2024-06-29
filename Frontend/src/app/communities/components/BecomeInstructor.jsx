import Image from "next/image";

const BecomeInstructor = () => {
  let imgStyling = {
    objectFit: "cover",
    width: "200px",
    height: "auto",
  };
  return (
    <div className="w-full my-20 py-8">
      <div className="w-[80%] mx-auto flex justify-between gap-10">
        {/* Content section */}
        <div className="w-1/2">
          <div className="">
            <h1 className="text-[#0466C1] uppercase font-semibold text-3xl my-4">
              Become a Instructor
            </h1>
            <p className="text-start text-md leading-7 my-6">
              Are you passionate about technology and enjoy teaching others?
              Consider becoming an instructor at our software training academy!{" "}
              <br />
              At our institute, our team of experienced instructors and mentors
              create highly engaging and impactful learning experiences for
              professionals and students. We offer a broad{" "}
            </p>
          </div>
          <div>
            <h1 className="text-[#0466C1] uppercase font-medium text-3xl mb-8">
              Objective
            </h1>
            <p className="text-start text-md leading-7  ">
              At our institute, our team of experienced instructors and mentors
              create highly engaging and impactful learning experiences for
              professionals and students. We offer a broad
            </p>
          </div>
        </div>

        {/* Image section */}
        <div className="w-1/2">
          <div className="relative w-full h-full flex">
            <Image
              width={300}
              height={300}
              style={imgStyling}
              src="/com-instruct-1.png"
              alt="A man writing on a whiteboard"
              className="w-[200px] h-auto absolute "
            />
            <Image
              width={300}
              height={300}
              style={imgStyling}
              src="/com-instruct-2.png"
              alt="A man writing on a whiteboard"
              className="w-[200px] h-auto absolute top-[40px] left-[36%]"
            />
            <Image
              width={300}
              height={300}
              style={imgStyling}
              src="/com-instruct-3.png"
              alt="A man writing on a whiteboard"
              className="w-[200px] h-auto absolute top-[53%] left-[15%]"
            />

            {/* Small grid cubes */}
            <Image
              width={1}
              height={1}
              style={{ width: "28px", height: "28px" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-7 h-7 absolute left-[36%]"
            />
            <Image
              width={1}
              height={1}
              style={{ width: "28px", height: "28px" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-7 h-7 absolute left-0 top-[210px]"
            />
            <Image
              width={1}
              height={1}
              style={{ width: "28px", height: "28px" }}
              src="/colorfull-grid-cube.png"
              alt="cubeIcon"
              className="w-7 h-7 absolute top-[97%] left-[52%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
