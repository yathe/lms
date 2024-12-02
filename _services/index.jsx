import { gql, request } from "graphql-request";
const MASTER_URL = `https://api-ap-south-1.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_KEY}/master`;
// console.log(process.env.NEXT_PUBLIC_HYGRAPH_KEY);
// Fetch course list
export const getCourseList = async () => {
  const query = gql`
  query CourseList {
      courseLists {
        name
        description
        banner {
          url
        }
        free
        id
        totalChapters
        stage
        author
      }
    }
  `;

  try {
    console.log(MASTER_URL, "he");
    const f = await request(MASTER_URL, query);
    console.log(f, "mein");
    return f;

  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

// Fetch course by ID and user email
export const getCourseById = async (id, userEmail) => {
  console.log(id, userEmail);
  const query = gql`
  query course {
    courseList(where: { id: "${id}" }) {
      chapter {
        ... on Chapter {
          id
          name
          videoid
        }
      }
      id
      name
      description
      totalChapters
      youtubeUrl
      free
      author
    }
    userEnrollCourses(where: { courseId: "${id}", userEmail: "${userEmail}" }) {
      courseId
      userEmail
      completedChapter {
        ... on Chapter {
          id
        }
      }
    }
  }
  `;
  try {
    console.log("jing", query);
    const l = await request(MASTER_URL, query);
    console.log("jing1");
    return l;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

// Enroll in a course
export const EnrollCourse = async (courseId, userEmail) => {
  const mutationQuery = gql`
    mutation EnrollCourse {
      createUserEnrollCourse(data: { courseId: "${courseId}", userEmail: "${userEmail}" }) {
        id
      }
    }
  `;

  try {

    const result = await request(MASTER_URL, mutationQuery);
    console.log("resulthaiyeh", result);
    return result;
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

// Publish course enrollment

export const PublishCourse = async (id) => {
  const mutationQuery = gql`
    mutation PublishCourse {
      publishUserEnrollCourse(where: { id: "${id}" }) {
        id
      }
    }
 ` ;

  try {
    console.log("hh", MASTER_URL);
    const result = await request(MASTER_URL, mutationQuery);
    console.log("jj");
    return result;
  } catch (error) {
    console.error("Error publishing course enrollment:", error);
    throw error;
  }
};

export const GetUserCourseList = async (userEmail) => {
  const query = gql`
  query UserCourseList {
    userEnrollCourses(where: {userEmail: "${userEmail}"}) {
      courseList {
        banner {
          url
        }
        description
        name
        id
        free
        sourceCode
        totalChapters
        author
      }
    }
  }  `;

  try {

    const result = await request(MASTER_URL,query);
    console.log("resultnicewow", result);
    return result;
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

