import React from 'react';
import './act.css';
import polar from "./images/ab5.jpg";
import polar2 from "./images/ab8.jpg";
import polar3 from "./images/ab9.jpg";
import polar4 from "./images/ab10.jpg";
import { Link } from 'react-router-dom';


function Act ()  {
  return (
    <div className="page-container3">
      <div className="background3">
        <nav className="horizontal-nav3">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="dangers">Concerns</a>
            </li>
            <li>
              <a href="act">Act Now</a>
            </li>
            <li>
              <a href="Gallery">Gallery</a>
            </li>
          </ul>
        </nav>
        <div className="image1">
          <img src={polar} alt="Polar" />
        </div>
        <h1 className="heading">Protect their future and save ours.</h1>
        <h1 className="heading2">The Problem</h1>
        <p className="para1">
          In a nutshell, global climate warming, caused by burning fossil
          fuels for energy, is melting the sea ice polar bears depend on. The
          bears need sea ice to hunt, mate, roam, and, sometimes, den. If the
          Arctic continues to warm at its current rates, we will see fewer
          polar bears in fewer places across the Arctic, making them more
          vulnerable to extinction.
        </p>
        <div className="image2">
          <img src={polar2} alt="Polar" />
        </div>
        <div className="image3">
          <img src={polar3} alt="Polar" />
          <h1 className="heading3">The Solution</h1>
          <p className="para3">
            As scientist Katharine Hayhoe says, when it comes to global climate
            warming and a future for polar bears, “we need all options on the
            table and all hands on deck.” The key to saving sea ice for polar
            bears and getting the climate back to functioning the way it should
            is to get away from using fossil fuels for energy altogether.
          </p>
          <h2 className="heading4">Be the change</h2>
          <p className="para4">
            Be the Change for Polar Bears: Join us in preserving the future of
            these magnificent creatures and their fragile Arctic habitat.
            Together, we can make a difference by supporting conservation
            efforts, promoting sustainable practices, and raising awareness
            about the challenges faced by polar bears. Let's protect their icy
            kingdom and ensure a thriving world for polar bears and generations
            to come.
          </p>
          <button type="button">
            <Link to="/Signup">Sign up</Link>
          </button>
          <div className="image4">
            <img src={polar4} alt="Polar" />
          </div>
        </div>
        <div className="blue-background">
        </div>
      </div>
    </div>
  );
};

export default Act;
