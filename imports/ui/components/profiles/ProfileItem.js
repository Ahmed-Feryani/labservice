import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
//import PropTypes from "prop-types";

//import { FaMapMarkerAlt } from "react-icons/fa";
import "./ProfileItem.css";
import "./profileBox.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useTracker } from "meteor/react-meteor-data";
import { ReviewsCollection } from "../../../api/reviews/reviews";
const ProfileItem = ({
  name,
  professionalSpecialty,
  location,
  skills,
  id,
  isProvider,
}) => {
  const reviewsScore = useTracker(() => {
    Meteor.subscribe("myReviews", id);
    const reviewsList = ReviewsCollection.find({ toId: id }).fetch();
    const score =
      reviewsList.reduce((acc, review) => review.value + acc, 0) /
      reviewsList.length;
    return [score, reviewsList.length];
  });

  console.log(reviewsScore, id);
  return (
    <div className="pro">
      <div className="prof">
        <div className="prof1">
          <img className="prof1-img" src="" alt="imag" />
        </div>
        <div className="prof2">
          <h2> {name} </h2>
          <h3> {professionalSpecialty} </h3>
          <span>
            À : <span className="location"> {location} </span>
          </span>

          <ul>
            {skills.slice(0, 4).map((skill, index) => (
              <li key={index}>
                <i class="far fa-check-circle"></i>
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="prof3"></div> */}
      </div>

      <div className="bott">
        {isProvider && (
          <div>
            <div className="rev">
              <div style={{ paddingTop: "2px" }}> Note:{"  "}</div>
              <Box
                sx={{
                  "& > legend": { md: 2 },
                }}
              >
                {!!reviewsScore[1] ? (
                  <Rating
                    name="read-only"
                    value={reviewsScore[0]}
                    readOnly
                    precision={0.5}
                  />
                ) : (
                  <div>has not been reviewed </div>
                )}
              </Box>
            </div>
          </div>
        )}
        {/* à editer */}
        <Link to={`/profile/${id}`}>
          <button className="primar">View Profile</button>{" "}
        </Link>
      </div>
    </div>
  );
};

// ProfileItem.propTypes = {
//   profile: PropTypes.object,
// };

export default ProfileItem;
