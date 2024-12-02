import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from 'lucide-react';
import './CourseList.css';

const CourseList = ({ courses }) => {
    return (
        <div className="course-list">
            {courses.map((course) => (
                <Link key={course.id} href={`/course-preview/${course.id}`} className="course-item">
                    <Image src={course.banner.url} alt={course.name} width={1000} height={500} className="course-image" />
                    <div className="course-details">
                        <h2 className="course-name">{course.name}</h2>
                        <h3 className="course-author">{course.author}</h3>
                        <div className="course-info">
                            <Book className="course-icon" />
                            <span className="course-chapters">{course.totalChapters} Chapters</span>
                        </div>
                        <span className="course-status">{course.free ? "Free" : "Paid"}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default CourseList;
