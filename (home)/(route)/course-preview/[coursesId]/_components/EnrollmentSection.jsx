import React from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { EnrollCourse, PublishCourse } from '../../../../../_services';

const EnrollmentSection = ({ courseDetail, userCourse, onEnrollSuccess }) => {
  const { user } = useUser();
  const router = useRouter();

  const enrollCourse = async () => {
    if (!user) {
      router.push('/sign-in');
      return;
    }

    try {
      const enrollResponse = await EnrollCourse(courseDetail.id, user.primaryEmailAddress.emailAddress);
      const enrollmentId = enrollResponse?.createUserEnrollCourse?.id;

      if (enrollmentId) {
        const publishResponse = await PublishCourse(enrollmentId);
        if (publishResponse) {
          alert('Enrollment successful!');
          onEnrollSuccess(); // Trigger re-fetch to update state
        } else {
          console.error('Failed to publish course enrollment.');
        }
      } else {
        console.error('Enrollment response is null or undefined.');
      }
    } catch (error) {
      console.error('Enrollment failed:', error);
    }
  };

  if (!courseDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Show 'Continue' button if user is already enrolled */}
      {userCourse?.courseId && (
        <div className="enrollment-section">
          <h2>Continue Your Paid Course</h2>
          <button className="enrollment-button">Continue</button>
        </div>
      )}

      {/* Enrollment options */}
      {!userCourse?.courseId && (
        <>
          {courseDetail.free ? (
            <div className="enrollment-section">
              <h2>Access this course for free</h2>
              <button className="enrollment-button" onClick={enrollCourse}>
                Enroll Now
              </button>
            </div>
          ) : (
            <div className="enrollment-section">
              <h2>Buy this course to access the content</h2>
              <button className="enrollment-button" onClick={enrollCourse}>
                Buy Course for $1.99
              </button>
            </div>
          )}
        </>
      )}

      {/* Membership option */}
      <div className="enrollment-section">
        <h2>Get Monthly Membership for all courses</h2>
        <button className="enrollment-button">Subscribe for $4.99/month</button>
      </div>
    </div>
  );
};

export default EnrollmentSection;
