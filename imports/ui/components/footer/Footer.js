import "./footer.css";
import React from "react";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a className="link" href="#home">
              {" "}
              <i className="fas fa-angle-right" /> home
            </a>
            <a className="link" href="#about">
              {" "}
              <i className="fas fa-angle-right" /> about
            </a>
            <a className="link" href="#services">
              {" "}
              <i className="fas fa-angle-right" /> services
            </a>
            <a className="link" href="#gallery">
              {" "}
              <i className="fas fa-angle-right" /> profiles
            </a>

            <a className="link" href="#contact">
              {" "}
              <i className="fas fa-angle-right" /> contact
            </a>
          </div>
          <div className="box">
            <h3>opening hours</h3>
            <p>
              {" "}
              <span>monday :</span> 09:00am to 06:00pm{" "}
            </p>
            <p>
              {" "}
              <span>tuesday :</span> 09:00am to 06:00pm{" "}
            </p>
            <p>
              {" "}
              <span>wednesday :</span> 09:00am to 06:00pm{" "}
            </p>
            <p>
              {" "}
              <span>thursday :</span> 09:00am to 06:00pm{" "}
            </p>
            <p>
              {" "}
              <span>friday :</span> 09:00am to 06:00pm{" "}
            </p>
            <p>
              {" "}
              <span>saturday :</span> 09:00am to 01:00pm{" "}
            </p>
            <p>
              {" "}
              <span>sunday :</span> closed{" "}
            </p>
          </div>
          <div className="box">
            <h3>contact info</h3>
            <a href="#" className="link">
              {" "}
              <i className="fas fa-phone" /> +123-456-7890{" "}
            </a>
            <a href="#" className="link">
              {" "}
              <i className="fas fa-phone" /> +111-222-3333{" "}
            </a>
            <a href="#" className="link">
              {" "}
              <i className="fas fa-envelope" /> e-service@gmail.com{" "}
            </a>
            <a href="#" className="link">
              {" "}
              <i className="fas fa-map" /> gafsa, tunisia - 2100{" "}
            </a>
          </div>
          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <form>
              <input
                type="email"
                placeholder="enter your email"
                className="email"
              />
              <input type="submit" defaultValue="subscribe" className="btn" />
            </form>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <div className="credit">
          {" "}
          created by <span>Gafsa Service</span> | all rights reserved!{" "}
        </div>
      </section>
    </div>
  );
};

export default Footer;
