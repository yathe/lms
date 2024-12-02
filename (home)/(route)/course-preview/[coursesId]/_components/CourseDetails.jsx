import { Book } from 'lucide-react';
import React from 'react';
import './CourseDetails.css';

const CourseDetails = ({ courseDetail }) => {
    if (!courseDetail) {
        return <p>Loading course details...</p>;
    }

    return (
        <div className='course-details-container'>
            <h2 className='course-title'>{courseDetail.name}</h2>
            <div className="course-info">
                <Book className="course-icon" />
                <span className="course-chapters">{courseDetail.totalChapters} Chapters</span>
            </div>
            <p className='course-description'>{courseDetail.description}</p>
        </div>
    );
};

export default CourseDetails;
