import React, { useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import { IoMdArrowUp } from "react-icons/io";

function Specialties() {
  const [moved, setMoved] = useState(false);

  return (
    <div className="specialitiesContainer" id="specialties">
      <div className="specialitiesTextContainer">
        <div>WHY CHOOSE US</div>

        <h2>Why Pick German Dentalle</h2>

        <div>
          An expert is prosthodontics and geriatrice dental solutions designed
          <br />
          with a strong focus on individualized paitentcare for all age groups.
        </div>
      </div>

      <div>
        <button className={`ArrowUpbtn  ${moved === true ? "upHide" : ""}`} onClick={() => setMoved(true)}>
          <IoMdArrowUp />
        </button>
        <button className={`ArrowDownbtn  ${moved === true ? "" : "upHide"}`} onClick={() => setMoved(false)}>
          <IoArrowDown />
        </button>
      </div>

      <div className="specialitiesMainContainer">
        <div className={`specialitiesContent ${moved ? "move-up" : ""}`} id="specialitiesLeftContainer">
          <h2>Understanding and Training</h2>

          <div>
            Our dental staff is meticulously trained and, more importantly,
            truly cares about our patients. We listen to concerns and explain
            every single detail. We help our patients feel at ease and ensure
            they understand the procedure prior to, during, and after the
            procedure.
          </div>
        </div>

        <div className={`specialitiesContent ${moved ? "move-down" : ""}`}>
          <img src="/SpecialtiesMainImage.jpg" alt="Specialties Image" />
        </div>
      </div>
    </div>
  );
}

export default Specialties;
