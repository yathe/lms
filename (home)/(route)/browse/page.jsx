"use client";
import React, { useEffect, useState } from 'react';
import { getCourseList } from '../../../_services';
import CategoryFilter from "./_components/CategoryFilter";
import CourseList from "./_components/CourseList";

const Browse = () => {
  const [courses, setCourses] = useState([]);
  const [coursesOrg, setCoursesOrg] = useState([]);
  
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const res = await getCourseList();
      console.log('Courses:', res);
      setCourses(res.courseLists || []); // Ensure courses is an array, even if empty
      setCoursesOrg(res.courseLists || []);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };
  const filterCourse = (category) => {
    // If the category is 'all', show all courses
    if (category === 'all') {
      setCourses(coursesOrg);
      return;
    }
  
    // Filter based on the category in the title or description
    const filteredList = coursesOrg.filter(course => {
      const title = course.title ? course.title.toLowerCase() : ''; // Check for title
      const description = course.description ? course.description.toLowerCase() : ''; // Check for description
  
      // Check if either title or description includes the category
      return title.includes(category.toLowerCase()) || description.includes(category.toLowerCase());
    });
  
    // Set the filtered courses
    setCourses(filteredList);
  };
  
  

  return (
    <div>
      <CategoryFilter selectedCategory={(category) => filterCourse(category)} />
      {courses.length > 0 ? <CourseList courses={courses} /> : <p>No courses available</p>}
    </div>
  );
};

export default Browse;
