import React from 'react';
import './About.css';
import pr from "./images/ab.jpg";
import pr2 from "./images/ab2.jpg";
import pr3 from "./images/polar.jpg";



function  AboutPage  ()  {
    return (
      
      <div className="page-container">
        <div className="background">
        <nav className="horizontal-nav2">
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
      <div className="image-wrapper">
          <img src={pr} alt="Polar" />
        </div>
      <h1>Our Mission, Values and History</h1>
      <p1>
      We know polar bears — their habits, their ecology, and their threats. In fact, we’re the only conservation organization dedicated solely to wild polar bears.
      </p1>
      <div className="image-wrapper2">
          <img src={pr2} alt="Polar" />
          <h2>
            Our Story
          </h2>
          <p>
          At our company, we are deeply committed to preserving the majestic beauty and fragile ecosystem of the Arctic by actively working to save the iconic polar bears that call this region their home. Through innovative and sustainable initiatives, we are dedicated to making a positive impact on the survival and well-being of these magnificent creatures.
          </p>
          <h6>Unifying the World into Action</h6>
          <p class="p2">Our story moves beyond the plight of the polar bears, because we know that humans are not immune to the visible threats to our global ecosystem. The final act is unwritten and we use every resource we have to facilitate action; to combat the belief that it’s too late; and to unify the world into action.</p>
          <div className="image-wrapper3">
          <img src={pr3} alt="Polar" />
          <h3 class="mission-heading">Our Mission</h3>
          <p class="p3">Our mission is to conserve polar bears and the sea ice they depend on. Through media, science, and advocacy, we work to inspire people to care about the Arctic, the threats to its future, and its connection to our global climate.</p>
          <h3 class="mission-heading2">Our Vision</h3>
          <p class="p4">We envision the long-term survival of polar bears and the unique part of the world they call home.</p>
        </div>
        <div className="blue-background2">
        </div>
        </div>
        </div>
      </div>
      
    );
  }


export default AboutPage;