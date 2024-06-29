"use client";
import React, { useState } from "react";

const TrainPage = () => {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "This is the description for course 1.",
    },
    {
      id: 2,
      title: "Course 2",
      description: "This is the description for course 2.",
    },
    {
      id: 3,
      title: "Course 3",
      description: "This is the description for course 3.",
    },
  ];
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);

  const handleSelectCourse = (course) => {
    setSelectedCourse(course);
  };
  return (
    <div className="w-full my-10 p-3 bg-[#0A0A0A] text-white">
      <div className="w-[80%] mx-auto flex flex-col py-6">
        {/* Page heading */}
        <div className="w-full ">
          <h1 className="text-3xl uppercase font-semibold text-[#78B6FF]">
            We train the right candidates for the Right roles
          </h1>
          <p className="text-sm text-start my-3">
            Since our inception in 2004, ValueCoders has been delivering IT
            outsourcing services worldwide. We combine business domain
            knowledge, proven methodologies, and the technology expertise of
            450+ skilled software professionals to yield high-quality solutions
            that add value to businesses.
          </p>
        </div>

        {/* Courses section */}
        <div className="w-full flex my-6">
          {/* Sidebar */}
          <div className="w-[200px] rounded-sm bg-[#111111]">
            <h2 className="font-semibold border-b-2 border-slate-500 p-2">Categories</h2>
            <ul>
              {courses.map((course) => (
                <li key={course.id} onClick={() => handleSelectCourse(course)} className="cursor-pointer">
                  {course.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Content */}
          <div className="grow p-8">
            {selectedCourse ? (
              <>
                <h2>{selectedCourse.title}</h2>
                <p>{selectedCourse.description}</p>
              </>
            ) : (
              <p>Select a course to see the details.</p>
            )}
          </div>
        </div>

        {/* Stats section */}
        <div className="w-full "></div>
      </div>
    </div>
  );
};

export default TrainPage;
