import React, { useState, useEffect } from "react";

function Expert() {

  const [count, setCount] = useState(1100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="expert-section" id="expert">
      <div className="expert-section-top">
        <h6>MEET OUR EXPERT</h6>
        <h2>Professional Profile</h2>
        <div>
          Dr. med. dent. Mohammad Abed Rabbo is a German-trained prosthodontics
          specialist, officially licensed in Dubai, with over 22 years of
          combined clinical, academic, and teaching experience in advanced
          restorative and prosthetic dentistry
        </div>
        <div>
          His professional qualifications include multiple verified postgraduate
          programs awarded by leading German scientific societies:
        </div>

        <ul>
          <li>
            Specialist in Digital Dentistry (DGCZ), with expertise in CAD/ CAM
            technologies, CEREC systems, and fully digital workflows
          </li>
          <li>Certified Periodontologist</li>
          <li>Verified Implantology Qualification (DGI)</li>
        </ul>
      </div>

      <div className="expert-section-bottom">
        <div className="box">
          <h1>8</h1> <br />
          ACADMIC YEARS <br />EXCELLENCE
        </div>

        <div className="box">
          <h1>24</h1> <br />
          YEARS OF<br />EXPERIENCE
        </div>

        <div className="box">
          <h1>4+</h1> <br />
          PUBLISHED SCIENTIFIC <br />JOURNALS
        </div>

        <div className="box">
          <h1>{count}</h1> <br />
          PATIENTS <br />TREATED
        </div>
  
      </div>
    </div>
  );
}

export default Expert;
