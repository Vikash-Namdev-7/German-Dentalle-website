import React from "react";
import { IoIosAt } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-section-left">
        <img src="/Image.jpg" alt="Footer Logo" />

        <div><IoIosAt className="footerIcons"/>info@germandentallee.com</div>
        <div><IoCallOutline className="footerIcons"/>+971 50 296 2223</div>
        <div>
            <HiOutlineLocationMarker className="footerIcons"/>
          Dubai Jumeirah 1 La Mer <br />
         <span>2A Street Villa 21B</span>
        </div>
      </div>

      <div className="footer-section-right">
        <div>
            <h6>QUICK LINKS</h6>

            <ul>
                <li>About Us</li>
                <li>Meet our Experts</li>
                <li>Services</li>
                <li>Specialties</li>
                <li>Testimonials</li>
            </ul>
        </div>
        
        <div>
            <h6>COMPANY</h6>

            <ul>
                <li>Review & Results</li>
                <li>Suports</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Testimonials</li>
            </ul>
        </div>

        <div>
            <h6>SOCIAL</h6>

            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
