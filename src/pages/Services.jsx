import React, { useRef } from "react";
import { AiOutlineSchedule } from "react-icons/ai";

function Services() {

  const inputRef = useRef(null);

  return (
    <div className="serviceContainer" id="services">
      <div className="serviceTextContainer">
        <span>SERVICES</span>

        <h2>Expert care for every smile</h2>

        <span>
          We offer a full spectrum of treatment - each tailored to <br />
          Elevate your health, confidence, and natural beauty.
        </span>
      </div>

      <div>
        <div className="card-container">
          <div className="card">
            <img src="/Aesthetic-Dentistry.jpg" />
            <div className="overlay"></div>

            <div className="text">
              <div className="textLeft">Laser Dentistry</div>
              <div className="textRight">
                Advanced, minimally invasive treatments using laser technology
                for precise and comfortable care.
              </div>
            </div>
          </div>

          <div className="card">
            <img src="/Geriatric.jpg" />
            <div className="overlay"></div>
            <div className="text">
              <div className="textLeft">Professional cleaning</div>
              <div className="textRight">
                Thorough removal of plaque and tartar to maintain a clean and
                healthy smile. Helps prevent cavities, gum disease, and supports
                long-term oral hygiene.
              </div>
            </div>
          </div>

          <div className="card">
            <img src="https://ik.imagekit.io/amddentalclinic/b967b9f8-f2af-4788-9729-792d2c7a722f-advantages_of_dental_implant_0qtXmHwmq.jpg" />
            <div className="overlay"></div>
            <div className="text">
              <div className="textLeft">Prophylaxis</div>
              <div className="textRight">
                Preventive care focused on maintaining oral health and stopping
                issues before they start. Regular check-ups and cleanings help
                keep your teeth strong, fresh, and disease-free.
              </div>
            </div>
          </div>

          <div className="card">
            <img src="/Implantology.jpg" />
            <div className="overlay"></div>

            <div className="text">
              <div className="textLeft">Implantology</div>
              <div className="textRight">
                Advanced solutions for replacing missing teeth with durable,
                natural-looking implants. Designed to restore function, comfort,
              </div>
            </div>
          </div>

          <div className="card">
            <img src="/Geriatric2.jpg" />
            <div className="overlay"></div>
            <div className="text">
              <div className="textLeft">Aesthetic-Dentistry</div>
              <div className="textRight">
                Enhancing the appearance of your smile through modern cosmetic
                treatments. Focused on improving color, shape, and alignment for
                a natural, confident look.
              </div>
            </div>
          </div>

          <div className="card">
            <img src="https://www.dentevim.com/upload/ortodontik-tedavi-su-resince-dis-bakiminda-nelere-dikkat-edilmeli.jpg" />
            <div className="overlay"></div>
            <div className="text">
              <div className="textLeft">Braces Treatment</div>
              <div className="textRight">
                Straightens misaligned or crooked teeth using braces or aligners
                to improve both appearance and bite.
              </div>
            </div>
          </div>

          <div className="card">
            <img src="/Prophylaxis.jpg" />
            <div className="overlay"></div>
            <div className="text">
              <div className="textLeft">Gum Disease Prevention</div>
              <div className="textRight">
                Prevents and controls gum infections through regular cleaning
                and proper oral care. Helps maintain healthy gums, reducing the
                risk of bleeding, swelling, and tooth loss.
              </div>
            </div>
          </div>

          <div className="card">
            <img src="https://www.lakeshoredentalstudio.com/wp-content/uploads/2023/07/63ea3ad6e90f21d1a6967692_Types-Of-Cosmetic-Dentistry-p-800.png" />
            <div className="overlay"></div>
            <div className="text">
              <div className="textLeft">Geriatric</div>
              <div className="textRight">
                Specialized dental care focused on the needs of older adults.
                Aims to maintain oral health, comfort, and function for a better
                quality of life.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <button className="Servicesbtn">
        <AiOutlineSchedule /> Schedule a visit
      </button> */}
      <button className="Servicesbtn" onClick={() => inputRef.current.showPicker()}>
        <AiOutlineSchedule className="btnIcon" />
        Schedule a visit
      </button>

      <input type="datetime-local" ref={inputRef} style={{ display: "none" }} />
    </div>
  );
}

export default Services;
