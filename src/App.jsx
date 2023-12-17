import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AllCourses from './Components/AllCourses';
import Course from './Components/Course';


const coursesData = {
  fullStack: [
    {
      course: 'fullStack',
      title: 'Mastering Full Stack Development',
      content: "Embark on a comprehensive journey through the world of Full Stack development with Course 1. Explore key technologies, frameworks, and best practices to build dynamic and scalable web applications. Dive into front-end and back-end development to become a well-rounded Full Stack developer.",
    },
    {
      course: 'fullStack',
      title: 'Advanced Full Stack Techniques',
      content: "Take your Full Stack skills to the next level with Course 2. Delve into advanced topics such as microservices architecture, cloud deployment, and optimizing application performance. Enhance your problem-solving abilities and learn to create robust, industry-ready solutions.",
    },
  ],
  dataScience: [
    {
      course: 'dataScience',
      title: 'Foundations of Data Science',
      content: "Unlock the secrets hidden in data with Course 1. Learn the fundamental concepts of data analysis, visualization, and machine learning. Gain practical skills in handling large datasets and extracting valuable insights to make informed decisions.",
    },
    {
      course: 'dataScience',
      title: 'Applied Data Science Techniques',
      content: "Apply your data science knowledge in real-world scenarios with Course 2. Explore advanced machine learning algorithms, data manipulation techniques, and model evaluation strategies. Build a strong foundation to solve complex problems using data-driven approaches.",
    },
  ],
  cyberSecurity: [
    {
      course: 'cyberSecurity',
      title: 'Essentials of Cyber Security',
      content: "Protect digital assets and secure online environments with Course 1. Understand the core principles of cybersecurity, including threat detection, encryption, and risk management. Arm yourself with the skills needed to safeguard information in today's interconnected world.",
    },
    {
      course: 'cyberSecurity',
      title: 'Advanced Cyber Security Practices',
      content: "Level up your cybersecurity expertise with Course 2. Dive into penetration testing, ethical hacking, and security analysis. Explore emerging threats and stay ahead in the constantly evolving landscape of cybersecurity.",
    },
  ],
  career: [
    {
      course: 'career',
      title: 'Career Development Strategies',
      content: "Navigate your professional journey with Course 1. Gain insights into effective resume building, job searching, and interview techniques. Equip yourself with the skills needed to excel in the competitive job market and kickstart a successful career.",
    },
    {
      course: 'career',
      title: 'Strategic Career Growth',
      content: "Chart a path for long-term career success with Course 2. Develop leadership skills, effective communication, and strategies for continuous learning. Position yourself for advancement and make informed decisions to achieve your career goals.",
    },
  ],
};

const allCourses=coursesData;

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/fullstack">Full Stack Development</Link>
            </li>
            <li>
              <Link to="/datascience">Data Science</Link>
            </li>
            <li>
              <Link to="/cybersecurity">Cyber Security</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<AllCourses data={Object.values(coursesData).flat()} />}
          />
          {Object.keys(coursesData).map((courseKey) => (
            <Route
              key={courseKey}
              path={`/${courseKey.toLowerCase()}`}
              element={
                <div>
                  {coursesData[courseKey].map((course, index) => (
                    <div key={index}>
                      <h2>{course.title}</h2>
                      <p>{course.content}</p>
                    </div>
                  ))}
                </div>
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
