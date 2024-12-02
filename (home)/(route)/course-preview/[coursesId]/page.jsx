"use client";

import React, { useEffect, useState } from "react";
import { getCourseById } from "../../../../_services";
import CourseDetails from "./_components/CourseDetails";
import VideoPlayer from "./_components/VideoPlayer";
import OptionSection from "./_components/OptionSection";
import EnrollmentSection from "./_components/EnrollmentSection";
import { useUser } from "@clerk/nextjs";
import "./page.css";

const CoursePreview = ({ params }) => {
  const [courseDetail, setCourseDetail] = useState(null);
  const [userCourse, setUserCourse] = useState(null);
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.coursesId && user) {
      fetchCourseDetails(params.coursesId, user.primaryEmailAddress.emailAddress);
    }
  }, [params.coursesId, user]);

  const fetchCourseDetails = async (courseId, email) => {
    try {
      const { courseList, userEnrollCourses } = await getCourseById(courseId, email);
      console.log("API Response - courseList:", courseList);
      console.log("API Response - userEnrollCourses:", userEnrollCourses);
      setCourseDetail(courseList);
      setUserCourse(userEnrollCourses?.[0] || null);
    } catch (error) {
      console.error("Failed to fetch course details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEnrollSuccess = async () => {
    await fetchCourseDetails(params.coursesId, user.primaryEmailAddress.emailAddress);
    console.log("Updated State - courseDetail:", courseDetail);
    console.log("Updated State - userCourse:", userCourse);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="course-preview-container">
      <div className="course-preview-grid">
        <div className="course-preview-content">
          {/* Video rendering logic */}
          {courseDetail && (courseDetail.free || userCourse?.courseId) ? (
            <VideoPlayer videoUrl={courseDetail.youtubeUrl} />
          ) : (
            <p>Purchase or enroll to view this content.</p>
          )}
          <CourseDetails courseDetail={courseDetail} />
        </div>
        <div className="course-enroll">
          <OptionSection />
          <EnrollmentSection
            userCourse={userCourse}
            courseDetail={courseDetail}
            onEnrollSuccess={handleEnrollSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
