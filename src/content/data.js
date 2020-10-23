import headshot from "../images/headshot.png";
import warbler_1 from "../images/warbler_1.png";
import warbler_2 from "../images/warbler_2.png";
import warbler_3 from "../images/warbler_3.png";
import warbler_4 from "../images/warbler_4.png";
import warbler_5 from "../images/warbler_5.png";
import warbler_6 from "../images/warbler_6.png";
import warbler_7 from "../images/warbler_7.png";
import warbler_8 from "../images/warbler_8.png";
import jobly_1 from "../images/jobly_1.png";
import jobly_2 from "../images/jobly_2.png";
import jobly_3 from "../images/jobly_3.png";
import jobly_4 from "../images/jobly_4.png";
import jobly_5 from "../images/jobly_5.png";
import jobly_6 from "../images/jobly_6.png";
import jobly_7 from "../images/jobly_7.png";
import jobly_8 from "../images/jobly_8.png";
import microblog_1 from "../images/microblog_1.png";
import microblog_2 from "../images/microblog_2.png";
import microblog_3 from "../images/microblog_3.png";
import microblog_4 from "../images/microblog_4.png";

/**
 *  DESCRIPTION:
 */

export const images = {
  headshot: {source: headshot}
};

export const points = [
  "I am a CPA turned software engineer. I’ve been interested in technology, especially coding, since writing video games with Scratch as a child. I have always felt a yearning to build things, and, in March 2020, I finally took the leap by enrolling in Rithm School in SF. Through Rithm I was able to build momentum in learning numerous languages, frameworks, and technologies, and was finally able to achieve a level of comfortability with coding.",
  "I graduated with a Master’s and Bachelor’s of Accountancy from the University of Missouri in May 2016, and immediately begun my career in Deloitte’s Audit practice in San Francisco. I found ways to integrate my desire to be close to tech by working on startup clients, and by earning a 7-month rotation on an Audit Innovation project developing the firm’s next generation audit platform, Omnia. After three years at Deloitte, I left for Connor Group in September 2019 to split time in the Financial Operations and the newly created Digital Solutions practices. While this move brought me closer to the development side, it caused me to realize I needed to take the full leap.",
  "Rithm afforded me the opportunity to intern with Clever Counsel, a platform that optimizes the case-building process for lawyers representing those who have experienced wage discrimination. Prior to any development, I had to quickly become acquainted with an existing codebase larger than any with which I had worked before. Once up-to-speed, I developed the password-reset functionality from scratch, which consisted of several React components, several Flask RESTful API endpoints, new instance/class methods for the user SQLAlchemy model connected to a MySQL database, token signing/hashing with itsdangerous, sending emails using Flask-Mail, a simple server in AWS, and of course various tests for both the frontend and backend.",
  "I graduated from Rithm in late June and am looking for a full-stack or backend software engineering role ideally at a medium-large company where I can continue to learn and grow. My frontend experience consists of JavaScript (Vanilla, React, jQuery), HTML, Sass, and CSS (Vanilla, Bootstrap), while my backend experience consists of JavaScript (Express/Node), Python (Vanilla, Flask), SQL (PostgreSQL, MySQL), and AWS (S3, SES, EC2). I have enjoyed learning all of these technologies and am happy to continue learning more in my career."
];

export const projects = [
  {"title": "Microblog React App",
   "link": "https://github.com/jurschler2/react-redux-microblog",
   "demo": "https://microblog.jurschler.com",
   "description": "Microblog is a full-stack React application that is a basic blogging site. Anyone is able to go to the site, create posts, vote on posts, and leave comments on posts. The primary focus of this project was state management through the usage of React Redux. The rest of the frontend was built out using React. The backend was written Node/Express, and handles calls from the frontend to update post data within a PostgreSQL database. This project was my first time using Redux for more robust state management, and it helped me understand just how useful Redux could be, especially for an application that should be scalable with many posts/comments/etc.", 
   "gallery": [
     {"img": microblog_1, "altText": "Image 1", "caption":"Landing Page"},
     {"img": microblog_2, "altText": "Image 2", "caption":"Add a Post"},
     {"img": microblog_3, "altText": "Image 3", "caption":"Post Details and Add Comments"},
     {"img": microblog_4, "altText": "Image 4", "caption":"Edit a Post"}
   ],
  "tech": ['JavaScript', 'React', 'Redux', 'Node', 'Express', 'PostgreSQL']},
  {"title": "Jobly React App",
   "demo": "https://jobly.jurschler.com",
   "link": "https://github.com/jurschler2/react-jobly",
   "description": "Jobly is a full-stack React application that enables users to apply for jobs at specific companies. To view the job listings, users must sign up and log in to receive a login token for authentication. Nearly all routes in this site are protected by a middleware authentication function that validates the login token provided by the user. Valid users are able to search for jobs, apply for jobs, and edit their profiles. This was one of my first React projects, and it helped me learn the usefulness of components and hooks, as well as frontend hierarchical design.", 
   "gallery": [
     {"img": jobly_1, "altText": "Image 1", "caption":"Landing Page"},
     {"img": jobly_2, "altText": "Image 2", "caption":"User Sign-Up"},
     {"img": jobly_3, "altText": "Image 3", "caption":"User Login"},
     {"img": jobly_4, "altText": "Image 4", "caption":"Homepage"},
     {"img": jobly_5, "altText": "Image 5", "caption":"Companies"},
     {"img": jobly_6, "altText": "Image 6", "caption":"Apply to a Company's Jobs"},
     {"img": jobly_7, "altText": "Image 7", "caption":"Apply to Any Jobs"},
     {"img": jobly_8, "altText": "Image 8", "caption":"User's Profile"}
   ],
  "tech": ['JavaScript', 'React', 'Node', 'Express', 'PostgreSQL']},
  {"title": "Warbler Flask App",
   "demo": "",
   "link": "https://github.com/jurschler2/flask-warbler",
   "description": "Warbler is a full-stack Flask application that functions like a lite clone of Twitter. To interact with the site, a user must first sign up and then login to receive a login token for authentication. Nearly all functionality is protected by a python decorator in the Flask backend to authenticate a user. Once inside the application, users can follow other users, write warbles (tweets), view follower or all warbles, like warbles, among other things. This project was written with a Jinja-supplied frontend, Flask backend, and a PostgreSQL database. The focus of this project was primarily on the database structure and table schemas to map out relationships between users, warbles, etc. SQLAlchemy was used in conjunction with the Flask routes to abstract user specific data based on the route requested. At the time, this was my biggest Python (as well as SQL) project, and it helped me get a better understanding of backend routing and database design patterns.", 
   "gallery": [
     {"img": warbler_1, "altText": "Image 1", "caption": "Landing Page"},
     {"img": warbler_2, "altText": "Image 2", "caption": "User Sign-Up"},
     {"img": warbler_3, "altText": "Image 3", "caption": "User Login"},
     {"img": warbler_4, "altText": "Image 4", "caption": "Homepage"},
     {"img": warbler_5, "altText": "Image 5", "caption": "User Profile"},
     {"img": warbler_6, "altText": "Image 6", "caption": "User's Message"},
     {"img": warbler_7, "altText": "Image 7", "caption": "User Create Message"},
     {"img": warbler_8, "altText": "Image 8", "caption": "Search Users"}
   ],
   "tech": ['Python', 'Flask', 'Jinja', 'SQLAlchemy', 'PostgreSQL']}
];