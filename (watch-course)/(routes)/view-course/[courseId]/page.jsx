"use client";
import React, { useEffect, useState } from "react";
import ChapterNav from "./_components/ChapterNav";
import FullVideoPlayer from "./_components/FullVideoPlayer";
import { getCourseById } from "../../../../_services";
import { UserButton, useUser } from "@clerk/nextjs";
import './page.css'; // Import the CSS file

const ViewCourse = ({ params }) => {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [userCourse, setUserCourse] = useState();
  const [activeChapter, setActiveChapter] = useState();

  useEffect(() => {
    if (user) {
      getCourse();
    }
  }, [user]);

  const getCourse = async () => {
    try {
      const resp = await getCourseById(
        params?.courseId,
        user.primaryEmailAddress.emailAddress
      );
      console.log("Course Data:", resp);

      const courseData = resp.courseList || {};
      setCourse(courseData);
      setUserCourse(resp.userEnrollCourses || []);
      // Set the initial chapter as the active chapter
      if (courseData.chapter?.length) {
        setActiveChapter(courseData.chapter[0]);
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return course?.name && (
    <div className="view-course-container">
      <div className="chapter-nav-container">
        <ChapterNav
          course={course}
          userCourse={userCourse}
          setActiveChapter={(chapter) => setActiveChapter(chapter)}
        />
      </div>

      <div className="main-content">
        <FullVideoPlayer activeChapter={activeChapter} />
      </div>

      {/* Place the UserButton on the right side */}
      <div className="user-button-container">
        <UserButton />
      </div>
    </div>
  );
};

export default ViewCourse;
