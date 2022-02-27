import React, { Fragment, useEffect } from "react";
//import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";

//import SearchBar from "../SearchBar/SearchBar";
import "./profiles.css";

const Profiles = () => {
  
  return (
    <Fragment>
      {false ? (
        <div></div>
      ) : (
        <div className="profile-page">
          {/* <p className="lead">
            <i className="fab fa-connectdevelop" /> Find a handyman near to you
          </p> */}
          <div
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
          >
            
          </div>
          <div
            className="profiles"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              // margin: "15px 15% 20px 15%", <<^ù

              minHeight: "65vh",
            }}
          >
            {2 > 0 ? (
              [1,1,1,1,1,1].map((profile) => (
                <ProfileItem   />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </div>
      )}
    </Fragment>
  );
};



export default Profiles;
