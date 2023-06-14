import React from 'react';
import './dangers.css';
import polar from "./images/a1.jpg";
import polar1 from "./images/a2.jpg";
import polar2 from "./images/a3.jpg";
import polar3 from "./images/a4.jpg";



function Danger  ()  {
  return (
    <div className="page-container4">
      <div className="background4">
        <nav className="horizontal-nav4">
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
          <img src={polar} alt="Polar" />
        </div>
        <h className="head1" >Conservation Concerns</h>
        <p className='graph1'>We will walk you through the threats polar bears face—including the biggest one of all: climate warming.</p>
           <h2 className=" hd2">Climate Change</h2>
           <div className="pic">
          <img src={polar1} alt="Polar" />
        </div>
        <p className="graph2">Polar bears rely on sea ice to hunt, breed, roam, and sometimes to den. But the Arctic is warming and ice is melting due to human-caused climate change. 

            Already, in parts of the Arctic, longer ice-free seasons and longer fasting periods have led to a decline in some polar bear populations.

            Research shows that without action to greatly reduce carbon emissions and stabilize our climate, we could lose all but a few polar bear populations by the end of the century.

            Climate change calls for a new approach to conservation—we can’t build a fence around the polar bear’s melting habitat, and we can’t assign wildlife officers to guard the gate. The key to getting the climate back to functioning the way it should is to transition away from fossil fuels for energy altogether.</p>
        
        <div className="video-wrapper">
        <iframe
          title="YouTube Video"
          width="1560"
          height="715"
          src="https://www.youtube.com/embed/I7Z1H4pUfIQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>     
        <h className= "hd3">When will polar bear populations collapse? </h>
        <h2 className= "hd4"> The answer is up to us.</h2>
            <h1 className="hd5">
          Commercial Activity
          </h1>
          <div className="picture2 ">   
     
          <img src={polar2} alt="Polar" />
        </div>
        <p className='graph3'>Commercial activity in the Arctic has increased as the region becomes more accessible. These activities include oil and gas exploration and development, shipping, mining, and tourism—each with their own challenges.

             Oil and gas activity, for example, not only brings the risk of spills, but could disturb polar bear moms and cubs hidden in dens under the snow—the most vulnerable time in their life cycle.

             Working to shield polar bears from disturbances will require vigilance and careful management.
       </p>
       <div className="video-wrapper2">
        <iframe
          title="YouTube Video"
          width="1560"
          height="715"
          src="https://www.youtube.com/embed/_Xz_5ZH_euc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2 className='hd6'>Protecting Dens Means Protecting Cubs</h2>
           <div className="picture4">
          <img src={polar3} alt="Polar" />
        </div>   
        </div>   
          <div>  
          <h3 className='hd7'>Pollution
          </h3>  
           <p className="hd8">The polar bear’s natural environment may seem white and pristine—far removed from the pollution in major cities and industrial areas.

              But in reality, polar bears in some parts of the Arctic can carry surprisingly high loads of toxic chemicals.

              Why? Because wind and ocean currents transport these pollutants to parts of the Arctic, where they concentrate as they make their way up the food chain. Polar bears absorb these higher levels when they eat seals.

              Reducing these pollutants will not only help polar bears, but people, too.</p>
     </div>
     <h2 className='hd9'>
      Latest News
     </h2>
     <div className="blue-background">
     <button className="image-button">
     Read More
    </button>
     <button className="image-button2">
     Read More
    </button>
    <button className="image-button3">
    Read More
    </button>
        </div>
     </div> 
     <div>
     </div>
    </div>
  );
};

export default Danger;