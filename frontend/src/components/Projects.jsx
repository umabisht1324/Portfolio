import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="Projects">
      <div className='box1'>
        <h2 id="h1">Web Development Projects</h2>
        <div className="project-list">
          <div className='pbox'>
            <div id='p1' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>Task Management Application</a>
            </div>
          </div>
          <div className='pbox'>
            <div id='p2' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>Social Media Dashboard</a>
            </div>
          </div>
          <div className='pbox'>
            <div id='p3' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>E-Commerce Website</a>
            </div>
          </div>
        </div>
      </div>
      <div className='box1'>
        <h2 id="h2">Machine Learning Projects</h2>
        <div className="project-list">
          <div className='pbox'>
            <div id='p4' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>Lungs Cancer Prediction</a>
            </div>
          </div>
          <div className='pbox'>
            <div id='p5' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>Handwritten Digit Recognization</a>
            </div>
          </div>
          <div className='pbox'>
            <div id='p6' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>Handwritten Digit Recognization</a>
            </div>
          </div>
        </div>
      </div>
      <div className='box1'>
        <h2 id="h2">Generative AI Projects</h2>
        <div className="project-list">
          <div className='pbox'>
            <div id='p7' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>PDF's Summarizer</a>
            </div>
          </div>
          <div className='pbox'>
            <div id='p8' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>Chat Bot For the Website</a>
            </div>
          </div>
          <div className='pbox'>
            <div id='p9' className="project-item"></div>
            <div className='plink'>
              <a href='https://github.com/umabisht1324'>Handwritten Digit Recognization</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
