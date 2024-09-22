import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <h1>Nathaniel V. Manansala</h1>
          <h2>Future Full-Stack Developer</h2>
        </div>

        <div className="Content">
          <div className="Contact">
            <h1>Contact</h1>
            <p><span>NathanielManansala18@gmail.com</span><i className="fas fa-envelope"></i></p>
            <p><span>+63 961-897-0487</span><i className="fas fa-phone"></i></p>
            <p><span>Masantol, Pampanga, Philippines</span><i className="fas fa-map-marker-alt"></i></p>
            <p><a href="https://www.facebook.com/yowmate.nate" className="link">Facebook<i className="fab fa-facebook"></i></a></p>
            <p><a href="https://github.com/NateDeCod3" className="link">Github<i className="fab fa-github"></i></a></p>

            <h1>Education</h1>
            <p>Bachelor of Science Information Technology</p>
            <p>University of the Assumption</p>
            <p>2022 - 2024 (Ongoing)</p>
            <p>San Fernando, Pampanga, Philippines</p>

            <h1>Skills</h1>
            <p>Python</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Java</p>
            <p>MySQL</p>
          </div>

          <div className="Experience">
            <h1>College Experience</h1>

            <h2>Freshman Year</h2>
            <h4>2022 - 2023</h4>
            <p><b>Python, Figma</b></p>
            <ul>
              <li>Learned the basics of programming using Python, covering basic operators and control structures.</li>
              <ul>
                <li>Created a modified tic-tac-toe game using Python in Tkinter.</li>
              </ul>
              <li>Introduced to Figma, enhancing our understanding of user interaction and user experience design.</li>
              <ul>
                <li>Created a wireframe and mockup of our version of the University of Assumption website using Figma.</li>
              </ul>
            </ul>

            <h2>Sophomore College</h2>
            <h4>2023 - 2024</h4>
            <p><b>HTML, CSS, JavaScript, Java, MySQL</b></p>
            <ul>
              <li>Learned the basics of HTML, CSS, JavaScript, and Java sparking an interest in web development.</li>
              <ul>
                <li>Created a grading system using HTML, CSS, and JavaScript in Codepen.</li>
                <li>Created a payroll system using HTML, CSS, and JavaScript in Codepen.</li>
                <li>Created a financial tracker using HTML, CSS, and JavaScript in Codepen.</li>
              </ul>
              <li>Learned the fundamentals of MySQL using phpMyAdmin for database creation, queries, and data structures.</li>
              <ul>
                <li>Created hotel management database.</li>
              </ul>
            </ul>

            <h2>Junior College</h2>
            <h4>2024 - current</h4>
            <p><b>HTML, CSS, JavaScript, Bootstrap, NextJS, React</b></p>
            <ul>
              <li>Learned how to use Bootstrap to build responsive and adaptable websites. Deepened my understanding of HTML, CSS, and JavaScript.</li>
              <ul>
                <li>Created a responsive developer portfolio using HTML, CSS, and Bootstrap.</li>
              </ul>
              <li>Introduced to Next.js and React.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;