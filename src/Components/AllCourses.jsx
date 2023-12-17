import React from 'react';

const AllCourses = ({ data }) => {
  return (
    <div>
      {data.map((course, index) => (
        <div key={index}>
          <h2>{course.title}</h2>
          <p>{course.content}</p>
        </div>
      ))}
    </div>
  );
};

export default AllCourses;
