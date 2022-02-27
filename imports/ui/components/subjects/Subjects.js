import "./subject.css";
import React from "react";
//import plum from "./img/plum.png";
//import elect from "./img/elect.png";
//import mech from "./img/mechanic.png";

//import carp from "./img/carp.png";
//import paint from "./img/pai.png";

const Subjects = () => {
  return (
    <section className="subjects">
      <h1 className="heading">
        our popular{" "}
        <span style={{ color: "rgb(37, 151, 244)", fontWeight: "800" }}>
          Services
        </span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="/subjects/img/plum.png" alt="" />
          <h3>Plumber</h3>
          <p>12 experts</p>
        </div>
        <div className="box">
          <img src="/subjects/img/elect.png" alt="" />
          <h3>Electrician</h3>
          <p>12 experts</p>
        </div>
        <div className="box">
          <img src="/subjects/img/mechanic.png" alt="" />
          <h3>mechanic</h3>
          <p>12 experts</p>
        </div>
        <div className="box">
          <img src="subjects/img/carp.png" alt="" />
          <h3>carpenter</h3>
          <p>12 experts</p>
        </div>
        <div className="box">
          <img src="/subjects/img/pai.png" alt="" />
          <h3>painter</h3>
          <p>12 experts</p>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
