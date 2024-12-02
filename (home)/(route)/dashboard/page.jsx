"use client";
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { GetUserCourseList } from '../../../_services'; // Adjust path as necessary
import CategoryItem from '../../_components/CategoryItem'; // Adjust path as necessary
import Image from 'next/image'; // Import Image for optimized loading of banners
import "./page.css"; // Import your CSS file

const Dashboard = () => {
  const { user } = useUser();
  const [userCourseList, setUserCourseList] = useState([]);

  useEffect(() => {
    if (user) getUserCourse();
  }, [user]);

  const getUserCourse = async () => {
    try {
      const resp = await GetUserCourseList(user.primaryEmailAddress.emailAddress);
      if (resp && resp.userEnrollCourses) {
        // Filter out the courses where courseList is null or undefined
        const validCourses = resp.userEnrollCourses.filter(course => course.courseList !== null);
        // Remove duplicate courses based on courseList.id
        const uniqueCourses = validCourses.filter((course, index, self) =>
          index === self.findIndex((c) => c.courseList.id === course.courseList.id)
        );
        setUserCourseList(uniqueCourses);
      }
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  return (
    <div className="dashboard">
      <h2>My Enrolled Courses</h2>
      <div className="course-list">
        {userCourseList.length > 0 ? (
          userCourseList.map((course) => (
            <div key={`${course.courseList.id}-${course.courseList.name}`} className="course-item">
              {course?.courseList?.banner?.url ? (
                <Image
                  src={course.courseList.banner.url} // Dynamically use the banner image URL
                  alt={course.courseList.name}
                  width={500} // Set width as required
                  height={300} // Set height as required
                />
              ) : (
                <p>No banner available</p>
              )}
              {/* Pass the course object to CategoryItem */}
              <CategoryItem key={`${course.courseList.id}-${course.courseList.name}`} course={course.courseList} />
            </div>
          ))
        ) : (
          <p className="no-courses-message">No courses found. Please enroll in some courses.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
