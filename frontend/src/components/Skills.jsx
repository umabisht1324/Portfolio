// src/components/Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    
    <section className="Skills">

      <h2>Skills</h2>
      <div className="skill-category">
        <h3>Technical Skills</h3>
        <p>React.js, Node.js, Express, MongoDB, MySQL, Redux, RESTful APIs, HTML, CSS, JavaScript, GitHub, Amazon Web Services</p>
      </div>


      <div className="skill-category" id='hrd'>
        <h3>Hard Skills</h3>
        <p>Algorithms, Array, Asynchronous, Caching, Data Driven, E-commerce Solutions, High Availability, Keyword Research, Low Latency, NoSQL, Product Portfolio, Road Map, SEO, Server Side, Storage Solutions, Technology Service, Toolkit, UI, Web Development</p>
      </div>


      <div className="skill-category">
        <h3>Soft Skills</h3>
        <p>Problem-solving, Critical thinking, Communication, Teamwork, Analysis, Assisting, Collaborate Diverse, Leading, Eagerness to learn, Motivated</p>
      </div>



    </section>
    
  );
}

export default Skills;
