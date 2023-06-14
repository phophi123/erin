import React, { useState } from "react";
import "./Gallery.css"; // Import CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import polarImage from "./images/polar1.jpg";
import polarImage2 from "./images/polar2.jpg";
import polarImage3 from "./images/polar3.jpg";
import polarImage4 from "./images/polar4.jpg";
import polarImage5 from "./images/back3.jpg";
import polarImage6 from "./images/back4.jpg";
import polarImage7 from "./images/back5.jpg";
import polarImage8 from "./images/back1.jpg";
import polarImage9 from "./images/polar8.jpg";
import polarImage10 from "./images/polar9.jpg";
import polarImage11 from "./images/polar10.jpg";
import polarImage12 from "./images/polar11.jpg";
import polarImage13 from "./images/a8.jpg";

const SocialMediaIcons = () => {
  const iconStyle = {
    width: "40px",
    height: "40px",
    backgroundColor: "gold",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "8px",
    color: "black",
    fontSize: "24px",
    left: "20px",
  };

  return (
    <div>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <div style={iconStyle}>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </a>
    </div>
  );
};

function Gallery() {
  const [image, setImage] = useState(null);
  const [photoDataList, setPhotoDataList] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const formData = new FormData();
    formData.append("file", image);
    fetch("https://localhost:7076/api/Photos", {
      method: "POST",
      body: formData,
    });
  };

  const handleImageFetch = async (event) => {
    await fetch("https://localhost:7076/api/Photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotoDataList(data);
        const dataURL = `data:image/jpeg;base64,${data.picture}`;
        setUploadedImage(dataURL);
      });
  };

  return (
    <div className="gallery-layout">
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
      <h2 className="header">Gallery</h2>
      <div className="image-container">
        <div className="gall">
          <img src={polarImage} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage2} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage3} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage4} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage5} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage6} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage7} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage8} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage9} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage10} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage11} alt="Polar" />
        </div>
        <div className="gall">
          <img src={polarImage12} alt="Polar" />
        </div>
        <div className="gall">
          <h className = ""></h>
          <img src={uploadedImage} alt="Uploaded Image" />
        </div>
        <div className="blue-box">
          <h className="HEAD">Join this conservation journey.</h>
          <h1 className="HEAD2">
            Become part of a community committed to protecting polar bears with
            our free e-news.
          </h1>
          <div>
            <div className="gall1">
              <img src={polarImage13} alt="Polar" />
            </div>
            <SocialMediaIcons />
          </div>
          <a href="/signup" className="signup-button">
            Sign Up
          </a>
          <button className="transparent-button1">Donate</button>
          <button className="transparent-button2">Take Action</button>
          <button className="transparent-button2">Awareness Events</button>
        </div>
        <div className="blue-box">
          <div>
            <h2 className="imgH">Upload Image Here</h2>
            <input
              type="file"
              onChange={(event) => {
                setImage(event.target.files[0]);
              }}
            ></input>
            <div className="button-container">
              <button className="upload" onClick={handleImageUpload}>
                Upload
              </button>
              <button className="view" onClick={handleImageFetch}>
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
