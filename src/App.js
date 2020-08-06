import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function App() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Henry Macfarlane</span>
          <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={require("./assets/img/profile.jpg")} alt="img of henry" /></span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
          </ul>
        </div>
      </nav>
      {/* Page Content */}
      <div className="container-fluid p-0">
        {/* About  */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h2 className="mb-0">
              Henry
                        <span className="text-primary">Macfarlane</span>
            </h2>
            <div className="subheading mb-5">
              <a href="mailto:hjemacfarlane@gmail.com">hjemacfarlane@gmail.com</a>
            </div>
            <p className="lead mb-5">I am a driven web developer who has a keen eye for detail and I am excited to join and be part of the Web Development world. I have a natural curiosity in all things tech which is what attracted me to this line of work. My experience at Develop Me was extremely positive and I really enjoyed both the Front-end and Back-end parts of the course and in particular Laravel and React. I look forward to working with people who share my enthusiasm for coding.</p>
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/henry-macfarlane-a811a116a/"><FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" /></a>
              <a className="social-icon" href="https://github.com/GRANDMAC96"><FontAwesomeIcon icon={["fab", "github"]} size="lg" /></a>
              <a className="social-icon" href="https://www.facebook.com/henry.macfarlane.7/"><FontAwesomeIcon icon={["fab", "facebook"]} size="lg" /></a>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Skills */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages/Frameworks</div>
            <ul className="list-inline">
              <li className="list-inline-item"><strong>HTML</strong></li>
              <li className="list-inline-item"><strong>CSS</strong></li>
              <li className="list-inline-item"><strong>Javascript</strong></li>
              <li className="list-inline-item"><strong>React</strong></li>
              <li className="list-inline-item"><strong>Redux</strong></li>
              <li className="list-inline-item"><strong>PHP</strong></li>
              <li className="list-inline-item"><strong>Laravel</strong></li>
              <li className="list-inline-item"><strong>Blade</strong></li>
              <li className="list-inline-item"><strong>SQL</strong></li>
            </ul>
            <div className="subheading mb-3">Tools/Other Skills</div>
            <ul className="list-inline">
              <li className="list-inline-item"><strong>Git</strong></li>
              <li className="list-inline-item"><strong>Gulp</strong></li>
              <li className="list-inline-item"><strong>Bootstrap</strong></li>
              <li className="list-inline-item"><strong>TDD</strong></li>
              <li className="list-inline-item"><strong>AWS</strong></li>
              <li className="list-inline-item"><strong>NPM</strong></li>
              <li className="list-inline-item"><strong>REST API</strong></li>
              <li className="list-inline-item"><strong>Wireframing</strong></li>
              <li className="list-inline-item"><strong>Teamwork</strong></li>
              <li className="list-inline-item"><strong>Integrity</strong></li>
              <li className="list-inline-item"><strong>Time Management</strong></li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
        {/* Experience */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Bartender</h3>
                <div className="subheading mb-3">Brewhouse & Kitchen - Bristol, United Kingdom</div>
                <p>Since moving to Bristol in October 2019 I have been working as a Bartender/Waiter at the Brewhouse and Kitchen Brewery. They double up as a pub and brewery and sell a variety of home brewed beer along with tasty food. </p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">October 2019 - March 2020</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Product Analyst</h3>
                <div className="subheading mb-3">Livelink - Havant, United Kingdom</div>
                <p>Undertook a summer placement (2 months) where I completed spreadsheets on all current products and learnt about sale trends. The analysis I completed allowed the planning of specific offers at specific times of the year.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">June 2019 - August 2019</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* Education */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Web Development Student</h3>
                <h6>DevelopMe, Bristol</h6>
                <div className="subheading mb-3">3 Month Full Stack Bootcamp</div>
                <p>I completed a 3 month full stack bootcamp where we completed projects each week and I am now confident in the languages Javascript and PHP. I can also use the Library React along with Redux and the framework Laravel. We set up many repositories on Github and I use Git/Gulp on a daily basis.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">March 2020 - June 2020</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">University of Birmingham</h3>
                <div className="subheading mb-3">Human Biology</div>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">September 2016 - June 2019</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">A levels</h3>
                <div className="subheading mb-3">Lancing College</div>
                <ul>
                  <li>Maths - A*</li>
                  <li>Chemistry - B</li>
                  <li>Biology - B</li>
                </ul>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">September 2009 - June 2014</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        {/* Interests */}
        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>Apart from being a web developer, I enjoy most of my time doing outdoors activities such as tennis and I run from time to time.</p>
            <p className="mb-0">However when inside I do enjoy watching movies/TV shows and some ping pong too. </p>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
}

export default App;
