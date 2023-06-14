import React from 'react';
import './HomePage.css';




function HomePage  ()  {
  return (
    <div className="home-page"> {/* Added "home-page" class for the background */}
      <nav className="horizontal-nav">
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
      <div className="learn-more">
             <h3>Without You,</h3>
             <h4>There is no them.</h4>
             <a href="https://www.youtube.com/watch?v=inlSRFxWlPY&ab_channel=BBCNews" class="learn-more-link">Learn More</a>
           </div>
      </div>
  );
};

export default HomePage;
