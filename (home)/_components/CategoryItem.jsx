import React from 'react';
import Image from 'next/image';
import { Book } from 'react-feather'; // Assuming you're using react-feather for icons
import "./CategoryItem.css";
const CategoryItem = ({ course }) => {
  return (
    <div className="course-item">
      {/* Image of the course banner */}
      <Image
        src={course.banner?.url || '/fallback-image.jpg'} // Use fallback image if banner URL is not available
        alt={`Banner image for the course: ${course.name}`}
        width={1000}
        height={500}
        className="course-image"
      />
      <div className="course-details">
        <h2 className="course-name">{course.name}</h2>
        <h3 className="course-author">{course.author}</h3>
        <div className="course-info">
          <Book className="course-icon" />
          <span className="course-chapters">{course.totalChapters} Chapters</span>
        </div>
        <span className={`course-status ${course.free ? 'free' : 'paid'}`}>
          {course.free ? 'Free' : 'Paid'}
        </span>
      </div>
    </div>
  );
};

export default CategoryItem;
