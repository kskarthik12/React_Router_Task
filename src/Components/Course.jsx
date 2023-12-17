import React from 'react';

const Course = ({ data }) => {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.content}</p>
    </div>
  );
};

export default Course;
