import React, { useRef } from "react";
import { AiOutlineSchedule } from "react-icons/ai";

function Home() {

  const inputRef = useRef(null);

  return (
    <div className="home">
      {/* <Navbar /> */}
      <div id="homeHero">
        <img
          id="heroimg"
          src="/dentalleImage.jpg"
          alt="Dental Image"
          height="370"
          width="750"
        />

        <div id="HomeTextLeft">
          <h1>
            German <br /> <span id="exe">Excellence</span>
          </h1>

          <div id="HomeImageContainer">
            <span>
              Led by Dr. med. dent.
              <br />
              Abed Rabbo, M.Sc
            </span>
            <img src="/dentistImage.jpg" alt="Dentist" />
          </div>
        </div>

        <div id="HomeTextRight">
          <h1>
            Meets Dubai <br /> Elegance
          </h1>
          <div>
            <button onClick={() => inputRef.current.showPicker()}> <AiOutlineSchedule className="btnIcon" />Schedule a visit</button>

            <input 
              type="datetime-local"
              ref={inputRef}
              style={{ display: "none" }} />

            {/* <AiOutlineSchedule /> <span id="text">Schedule a visit</span> */}
          </div>
        </div>
        <div id="homeHeroText">
          <span> Orthodontics. Family & Pediatric Dental </span>
        </div>
      </div>

    </div>
  );
}

export default Home;
