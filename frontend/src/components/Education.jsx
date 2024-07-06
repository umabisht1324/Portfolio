// src/components/Education.js
import React from 'react';
import './Education.css';

function Education() {
  return (
    <section className="Education">




      <div>
        <h2>Educational Details</h2>
        
        <div className='edu'>
          <div className="education-item">
            <h3>Graphic Era Hill University, Dehradun</h3>
            <p>Bachelor’s in Technology; Majors in Computer Science and Engineering</p>
            <p>CGPA: 8.7</p>
            <p>2021-2025</p>
          </div>
          {/* <div id='pic1'>
            <p>hello00pppppppppppppppp</p>
          </div> */}
        </div>





        <div className='edu'>
          <div className="education-item">
            <h3>Army Public School, Almora</h3>
            <p>Intermediate</p>
            <p>CGPA: 9.3</p>
            <p>20019-2020</p>
          </div>
          {/* <div id="pic2">
          </div> */}
        </div>


        <div className='edu'>
          <div className="education-item">
            <h3>Army Public School, Almora</h3>
            <p>High School</p>
            <p>CGPA: 9.2</p>
            <p>20018-2019</p>
          </div>
          {/* <div id="pic2">
          </div> */}
        </div>

      </div>





    </section>
  );
}

export default Education;
