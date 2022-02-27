import "./stats.css";
import React from "react";
//import fun1 from "./img/fun-fact-icon-1.svg";
// import fun2 from "./img/fun-fact-icon-2.svg";
//import fun3 from "./img/fun-fact-icon-3.svg";
//import fun4 from "./img/fun-fact-icon-4.svg";

const Stats = () => {
  return (
    <div>
      <section className="fun-fact">
        <div className="box">
          <img src="/stats/img/fun-fact-icon-1.svg" alt="" />
          <div className="info">
            <h3>2890</h3>
            <p>repairs done</p>
          </div>
        </div>

        {/* <div className="box">
          <img src={fun2} alt="" />
          <div className="info">
            <h3>25</h3>
            <p>awards won</p>
          </div>
        </div> */}

        <div className="box">
          <img src="/stats/img/fun-fact-icon-3.svg" alt="" />
          <div className="info">
            <h3>3585</h3>
            <p>happy clients</p>
          </div>
        </div>

        <div className="box">
          <img src="/stats/img/fun-fact-icon-4.svg" alt="" />
          <div className="info">
            <h3>45</h3>
            <p>active workers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
