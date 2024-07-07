// src/About.tsx
import React, { useEffect, useState } from 'react';
import './App.css';

const images = [
  'https://t3.ftcdn.net/jpg/01/28/44/76/240_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg',
  'https://static.vecteezy.com/system/resources/previews/007/932/867/original/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg',
  'https://www.susangreenecopywriter.com/wp-content/uploads/2013/01/iStock_000039291924_Medium.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmp6z1uvOtOW2pLGW1Str3bIG1X226HH7EA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsgv0ocurpWDR02XP3_4MiNkUjEt8LZCmWhg&s',
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className='about'>
      <div className="slideshow col-lg-12 col-md-12 col-sm-12">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
      <h1 className='about-heading'>About Us</h1>
      <p>
      I have created the AppyIntern app. The purpose of this application is for HR to manage the 
applications of interns and users. I have used React.js, TypeScript, Bootstrap, CSS, and 
JavaScript to create the application. The features available in this application include creating 
an account and then logging in. Once logged in, users see the home page, the about us page, 
and the contact page. On the home page, there are logout and login features. When HR logs 
in, they see the home page, about us page, database page, and the data of those who have 
applied for internships and jobs at this company.

      </p>
      <strong className='about-heading'><h1>AppyIntern Application Overview</h1></strong>
      <p>The AppyIntern application is a robust and efficient platform designed to assist HR professionals in managing internship and job applications. The app leverages modern web technologies to provide a seamless and user-friendly experience for both HR personnel and applicants.</p>
      <strong className='about-heading'><h4>Purpose:</h4></strong>
      <p>The primary purpose of the AppyIntern application is to streamline the process of handling intern and user applications. It offers HR departments a centralized system to manage and track applications effectively.</p>
      <strong className='about-heading'><h4>Technologies Used:</h4></strong>
      <p><b>React.js</b>: For building the user interface and ensuring a dynamic and responsive experience.</p>
      <p><strong>TypeScript</strong>: To add type safety and enhance the maintainability of the codebase.</p>
      <p><strong>Bootstrap</strong>: For creating a responsive and visually appealing design.</p>
      <p><strong>JavaScript</strong>: To add interactivity and functionality to the application.</p>
      <strong className='about-heading'><h4>Features:</h4></strong>
      <strong className='about-heading'>User Account Management:</strong>
      <p><strong>Create Account:</strong>Users can create an account to start using the application.</p>
      <p><strong>Login/Logout</strong>: Users can log in to access personalized features and log out when finished.</p>
      <strong className='about-heading'><h4>Pages</h4></strong>
      <p><strong>Home Page</strong>: The main landing page that users see upon logging in. It provides an overview and navigation to other sections.</p>
      <p><strong>About Us Page</strong>: Contains information about the company and the purpose of the application.</p>
      <p><strong>Contact Page</strong>: Provides contact information for users to get in touch with the company.</p>

      <strong className='about-heading'><h4> HR Features</h4></strong>
      <p><strong>Database Page</strong>: Accessible to HR personnel, this page displays the data of all applicants who have applied for internships and jobs at the company.</p>
      <p><strong>Applicant Data Management</strong>: HR can view detailed information about each applicant, making it easier to manage the recruitment process.</p>
      <h4 className='about-heading'>User Experience:</h4>
      <p><strong>General Users</strong>: After creating an account and logging in, users can navigate through the home page, about us page, and contact page. These sections provide essential information and a means to communicate with the company.</p>
      <p><strong>HR Personnel</strong>: Upon logging in, HR professionals have access to additional features, including the database page, where they can manage and review applications efficiently.</p>
      <strong className='about-heading'><h4>Summary:</h4></strong>
      <p>The AppyIntern application is a comprehensive tool for managing intern and job applications. It combines the power of React.js, TypeScript, Bootstrap, CSS, and JavaScript to deliver a user-friendly and efficient experience. By providing dedicated features for both general users and HR personnel, AppyIntern ensures that the application process is streamlined and organized, benefiting both the applicants and the company.</p>


      
    </div>
  );
};

export default About;
