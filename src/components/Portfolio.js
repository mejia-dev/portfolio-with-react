import React from "react";
import '../styles/Portfolio.css'

export default function Portfolio() {

  function expandNavBarItem(elementId) {
    document.getElementById(elementId).classList.toggle("active");
    const content = document.getElementById(elementId).nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }

  return (
    <React.Fragment>
      <div className="navBar">
        <img className="name" src="img/name.png" alt="Aaron Mejia name" />
        <div>
          <img className="profilePic" src="img/aaron.jpg" alt="picture of Aaron sitting on beach watching sunset" />
        </div>
        <br className="wideViewOnly" /><br className="wideViewOnly" />
        <button type="button" className="expandSection" id="firstNavSection" onClick={() => expandNavBarItem("firstNavSection")}>About</button>
        <div className="aboutMe-Section">
          <p>Hello!<br />I am an up-and-coming developer in the Portland metro area. I come from a background of 5 years in IT, managing the maintenance of large networks, training of technicians, and creation/documentation of processes. Programming excites me and I <em>love</em> helping individuals further themselves and their businesses through technology. I am currently enrolled in <span ><a href="https://epicodus.com" target="_blank">Epicodus</a></span> to help achieve this goal.<br />I'm excited to work with you!</p>
        </div>
    <br className="wideViewOnly" />
    <button type="button" className="expandSection" id="secondNavSection" onClick={() => expandNavBarItem("secondNavSection")}>Skills & Interests</button>
    <div className="aboutMe-Section">
      <ul>
        <li>I have assisted in the creation & design of at least 4 different websites for small businesses.</li>
        <li>I have built fully-functioning web servers from scratch on Linux using LAMP stacks and WordPress</li>
      </ul>
    </div>
    <br className="wideViewOnly" />
    <button type="button" className="expandSection" id="thirdNavSection" onClick={() => expandNavBarItem("thirdNavSection")}>Contact</button>
    <div className="aboutMe-Section">
      <p>Let's get in touch!</p>
      <p>Email: <a href="mailto:aaron@example.com">aaron@example.com</a>
        <br />
        GitHub: <a href="https://github.com/mejia-dev">github.com/mejia-dev</a>
      </p>
    </div>

  </div>

  <div className="projectSpotlight-Wrapper">
    <div className="projectSpotlight-Project">
      <h2>Island Resort Website</h2>
      <p>This project was created as an example for a website that could be used by an island resort company.</p>
      <p className="gitHubLink">GitHub Link: <a href="https://github.com/mejia-dev/sample-island-resort-website">github.com/mejia-dev/sample-island-resort-website</a></p>
      <img src="img/sample-island-resort.png" alt="screenshot of Island Resort website" />
      <h3>Languages Used:</h3>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
      </ol>
      <h3>Features:</h3>
      <ul>
        <li>Welcome/Home Page</li>
        <li>Activities Page</li>
        <li>Contact Page</li>
        <li>Accommodations Page</li>
      </ul>
      <h3>Authors:</h3>
      <ul>
        <li><a href="https://github.com/mejia-dev">mejia-dev (me)</a></li>
      </ul>
    </div>

    <br /><br />

    <div className="projectSpotlight-Project">
      <h2>Blogging Site</h2>
      <p>An example of a blogging site created by a classNamemate and I. I styled the CSS on the "About" page.</p>
      <p className="gitHubLink">GitHub Link: <a href="https://github.com/mejia-dev/blogging-site">github.com/mejia-dev/blogging-site</a></p>
      <img src="img/sample-blogging-site.png" alt="screenshot of Blogging website" />
      <h3>Languages Used:</h3>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
      </ol>
      <h3>Features:</h3>
      <ul>
        <li>Home/Blog Page</li>
        <li>About Page</li>
        <li>Floated images on the About page</li>
      </ul>
      <h3>Authors:</h3>
      <ul>
        <li><a href="https://github.com/mejia-dev">mejia-dev (me)</a></li>
        <li><a href="https://github.com/daisyorozcob">daisyorozcob</a></li>
      </ul>
    </div>

    <br /><br />

    <div className="projectSpotlight-Project">
      <h2>Resume Website</h2>
      <p>A resume template recreated for the web by a classNamemate and I.</p>
      <p className="gitHubLink">GitHub Link: <a href="https://github.com/daisyorozcob/resume-site">github.com/daisyorozcob/resume-site</a></p>
      <img src="img/sample-resume-site.png" alt="screenshot of Resume website" />
      <h3>Languages Used:</h3>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
      </ol>
      <h3>Features:</h3>
      <ul>
        <li>Welcome/Home Page</li>
        <li>Activities Page</li>
        <li>Contact Page</li>
        <li>Accommodations Page</li>
      </ul>
      <h3>Authors:</h3>
      <ul>
        <li><a href="https://github.com/daisyorozcob">daisyorozcob</a></li>
        <li><a href="https://github.com/mejia-dev">mejia-dev (me)</a></li>
      </ul>
    </div>

  </div>
    </React.Fragment>
  )
}