import Image from "next/image";

const Gallery = () => {
  let imgData = [
    "gallery1",
    "gallery2",
    "gallery3",
    "gallery4",
    "gallery5",
    "gallery6",
    "gallery7",
    "gallery8",
    "gallery9",
  ];

  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };

  return (
    <div className="w-full my-8 py-6 bg-black text-white">
      <div className="w-[80%] mx-auto">
        {/* Heading section */}
        <div className="my-6">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            Gallery
          </h1>
          <p className="text-start my-5 text-slate-400">
            With expertise in Digital, Engineering and Cloud, we deliver
            solutions that fulfill the traditional, transformational and future
            needs of clients across the globe.
          </p>
        </div>

        {/* Images section */}
        <div className="grid grid-cols-6 gap-4 p-4 my-10">
          <div className=" row-span-2 col-span-2">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery1.png`}
              alt="galleryImg"
            />
          </div>
          <div className="col-span-2">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery2.png`}
              alt="galleryImg"
            />
          </div>
          <div className="">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery3.png`}
              alt="galleryImg"
            />
          </div>
          <div className="">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery4.png`}
              alt="galleryImg"
            />
          </div>
          <div className="col-span-2">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery5.png`}
              alt="galleryImg"
            />
          </div>
          <div className="">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery6.png`}
              alt="galleryImg"
            />
          </div>
          <div className="">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery7.png`}
              alt="galleryImg"
            />
          </div>
          <div className=" col-span-4">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery8.png`}
              alt="galleryImg"
            />
          </div>
          <div className=" col-span-2">
            <Image
              width={400}
              height={200}
              style={imgStyling}
              src={`/gallery9.png`}
              alt="galleryImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
