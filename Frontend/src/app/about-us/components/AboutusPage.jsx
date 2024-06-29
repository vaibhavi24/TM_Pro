import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutusPage = () => {
  let imgStyling = {
    objectFit: "cover",
    width: "100%",
    height: "100%"
  }
  return (
    <div className="w-full my-10">
      <div className="w-[80%] mx-auto flex justify-between gap-3">
        {/* Content section */}
        <div className="w-1/2">
          <h1 className="uppercase text-[#0466C1] text-3xl font-semibold my-3">
            About Us
          </h1>
          <p className="text-start my-5">
            TechMomentum is your gateway to professional growth and success in
            the digital age. Our comprehensive courses cover the latest trends
            in technology, digital marketing, and business innovation, providing
            you with the expertise to stay ahead of the curve. Join us and
            embark on a journey of continuous learning and achievement.{" "}
          </p>
          <div className="flex items-center my-5">
            <Link href={"#"} className="me-2">
              <Image
                style={imgStyling}
                width={34}
                height={34}
                alt="facebook-fill"
                src="/facebookfill-3.svg"
              />
            </Link>
            <Link href={"#"} className="mx-2">
              <Image
                style={imgStyling}
                width={34}
                height={34}
                alt="Instagram"
                src="/instagram-square.png"
              />
            </Link>
            <Link href={"#"} className="mx-2">
              <Image
                style={imgStyling}
                width={40}
                height={34}
                alt="Youtube"
                src="/youtubefill-3.svg"
              />
            </Link>
            <Link href={"#"} className="mx-2">
              <Image
                width={34}
                height={34}
                style={imgStyling}
                alt="Linkedin"
                src="/linkedinfill-3.svg"
              />
            </Link>
          </div>
        </div>

        {/* Image section */}
        <div className="w-1/2">
          <Image
            style={imgStyling}
            width={400}
            height={200}
            quality={100}
            src="/about-group-img.png"
            alt="about-img"
            sizes="(max-width: 200px) 100vw, 400px" // Adjust sizes for responsiveness
          />
        </div>
      </div>
    </div>
  );
};

export default AboutusPage;
