import React from "react";
import "../ComponentsStyles/Footer.css";

export const Footer = () => {
  return (
    <div className="FooterBody">
      <div className="FooterLeft">
        <div className="FooterCompanyName">
          <div className="Logo-First-Half"></div>
          <div className="Logo-Second-Half"></div>
          <div className="FooterFont3">Lingua</div>
        </div>

        <ul className="FooterFont4">
          <li>20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021</li>
        </ul>
      </div>

      <div className="FooterMid">
        <div className="FooterFont1">Company</div>
        <ul className="FooterFont2">
          <li>Careers</li>
          <li>Teachers</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="FooterMid">
        <div className="FooterFont1">Product</div>
        <ul className="FooterFont2">
          <li>Courses</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="FooterMid">
        <div className="FooterFont1">Legal</div>
        <ul className="FooterFont2">
          <li>Terms & Conditions</li>
          <li>Privacy policy</li>
        </ul>
      </div>

      <div className="FooterRight">
        <div className="FooterMedia">
          <img src="f.png" alt="" />
        </div>
        <div className="FooterMedia">
          <img src="twitter.png" alt="" />
        </div>
        <div className="FooterMedia">
          <img src="instagram.png" alt="" />
        </div>
      </div>
    </div>
  );
};
