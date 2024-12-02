"use client";
import React, { useEffect, useState } from "react";
import { PlayCircle, PauseCircle } from "lucide-react";
import "./ChapterNav.css";

const ChapterNav = ({ course, userCourse, setActiveChapter }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (course?.chapter?.length) { // Check if chapters exist
      setActiveChapter(course.chapter[0]);
    }
  }, [course, setActiveChapter]);

  return (
    <div className="chapter-nav">
      <div className="chapter-header">
        <h2 className="chapter-title">{course.name || "Course Name"}</h2>
        <h3 className="chapter-author">By {course.author || "Unknown Author"}</h3>
      </div>
      <div className="chapter-list">
        {course.chapter?.map((chapter, index) => (
          <div
            key={index}
            className={`chapter-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              setActiveChapter(chapter);
            }}
          >
            {activeIndex === index ? (
              <PauseCircle className="chapter-icon" />
            ) : (
              <PlayCircle className="chapter-icon" />
            )}
            <h4 className="chapter-name">{chapter.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterNav;
