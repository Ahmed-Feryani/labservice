//import { Fragment, useEffect, useState } from "react";
//import dateFormat from "dateformat";
//import { MdDoneAll } from "react-icons/md";

//import { useDispatch, useSelector } from "react-redux";
//import { addReview, finishRepair, getRepair } from "../../redux/actions/repair";
import "./serd.css";

//import "bootstrap/dist/css/bootstrap.min.css";
//import { message } from "antd";
//import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
//import StarIcon from "@mui/icons-material/Star";
//import Spinner from "../layout/Spinner";
//import { useParams } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ServicesCollection } from "../../../api/services/services";
import Rating from "@mui/material/Rating";
import { useTracker } from "meteor/react-meteor-data";
import { ReviewsCollection } from "../../../api/reviews/reviews";
import moment from "moment";
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const labels2 = {
  Useless: 0.5,
  "Useless+": 1,
  Poor: 1.5,
  "Poor+": 2,
  Ok: 2.5,
  "Ok+": 3,
  Good: 3.5,
  "Good+": 4,
  Excellent: 4.5,
  "Excellent+": 5,
};

const Service = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState(0);
  const isProvider = useTracker(() => {
    return Meteor?.user()?.profile?.isProvider;
  });
  const isClient = useTracker(() => {
    return Meteor?.user()?.profile?.isClient;
  });

  const userName = useTracker(() => {
    return Meteor?.user()?.profile?.name;
  });

  const service = useTracker(() => {
    Meteor.subscribe("services");
    Meteor.subscribe("allUsers");
    const service = ServicesCollection.findOne(id);
    const seeker = Meteor.users.findOne(service?.seeker);
    const provider = Meteor.users.findOne(service?.provider);
    return {
      ...service,
      nameProvider: provider?.profile?.name,
      lastNameProvider: provider?.profile?.lastName,
      nameSeeker: seeker?.profile?.name,
      lastNameSeeker: seeker?.profile?.lastName,
    };
  });

  const review = useTracker(() => {
    Meteor.subscribe("reviews");
    return ReviewsCollection.findOne({ serviceId: service?._id });
  });
  useEffect(() => {
    if (review?.value) {
      setValue(review?.value);
    }
  });

  const user = useTracker(() => {
    return Meteor.user();
  });
  const finishedHandler = (id) => {
    Meteor.call("ServicesCollection.Finished.update", id, () => {
      Meteor.call(
        "notification.insert",
        `${userName} finished his work`,
        service?.seeker,
        service?._id
      );
    });
  };

  const reviewHandler = (event, newValue) => {
    console.log("new value :::::::::::::", newValue);
    Meteor.subscribe("reviews");
    const review = ReviewsCollection.findOne({
      serviceId: service?._id,
    });
    if (review) {
      Meteor.call("ReviewsCollection.update", review._id, newValue, () => {
        setValue(newValue);
      });
    } else {
      Meteor.call(
        "ReviewsCollection.insert",
        service._id,
        Meteor.userId(),
        service.provider,
        user.profile.name,
        user.profile.lastName,
        newValue,
        () => {
          setValue(newValue);
          Meteor.call(
            "notification.insert",
            `${userName} review your work`,
            service?.provider,
            service?._id
          );
        }
      );
    }
  };

  return (
    <Fragment>
      {false ? (
        <div>azeaer</div>
      ) : (
        <div className="serv">
          <div className="container ss">
            <div className="row">
              <div className="col-lg-12 mb-4">
                <dl className="dl-horizontal">
                  <dt>Description:</dt>

                  <dd> {service?.description} </dd>
                </dl>
                <div className="m-b-md"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <dl className="dl-horizontal">
                  <dt>Created by:</dt>{" "}
                  <dd>
                    {" "}
                    {`${service?.nameProvider} ${service?.lastNameProvider}`}{" "}
                  </dd>
                  <dt>Client:</dt>{" "}
                  <dd>
                    {`${service?.nameSeeker} ${service?.lastNameSeeker}`}{" "}
                  </dd>
                </dl>
              </div>
              <div className="col-lg-6" id="cluster_info">
                <dl className="dl-horizontal">
                  <dt>Created:</dt>{" "}
                  <dd>
                    {moment(service?.createdAt).format("MM-DD-YYYY")}
                    {" at "}
                    {moment(service?.createdAt).format("hh:mm")}
                  </dd>
                  {service?.isFinished && (
                    <>
                      <dt>Finished:</dt>

                      <dd>
                        {moment(service?.finishedAt).format("MM-DD-YYYY")}
                        {" at "}
                        {moment(service?.finishedAt).format("hh:mm")}
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <dl className="dl-horizontal">
                  <dt>Photos:</dt>
                  <dd>
                    <img
                      src=""
                      width={"150px"}
                      style={{ borderRadius: "5px" }}
                      alt="service"
                    />
                  </dd>
                </dl>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <dl className="dl-horizontal">
                  <dt>Completed:</dt>
                  {service?.isFinished ? (
                    <dd> Yes</dd>
                  ) : (
                    <>
                      <dd> No</dd>
                      {isProvider && (
                        <h3 onClick={() => finishedHandler(id)}>
                          Mark as Finished
                        </h3>
                      )}
                    </>
                  )}
                </dl>
              </div>
            </div>
            {isProvider ? (
              <>
                <div className="row">
                  <div className="col-lg-12">
                    <dl className="dl-horizontal">
                      <dt>Num de telophone:</dt>

                      <dd>{service?.phone_user}</dd>
                    </dl>
                  </div>
                </div>

                {!service?.isFinished ? (
                  <h3>Le client n'a pas donné son avis </h3>
                ) : (
                  <div className="row">
                    <div className="col-lg-12">
                      <dl className="dl-horizontal">
                        <dt>Note du client:</dt>

                        <dd>
                          <Box
                            sx={{
                              "& > legend": { md: 2 },
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Rating
                              name="read-only"
                              precision={0.5}
                              size="large"
                              value={value}
                              readOnly
                            />
                          </Box>
                        </dd>
                      </dl>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <dl className="dl-horizontal">
                    <dt>Noter le travail:</dt>

                    {service?.isFinished ? (
                      <dd>
                        <Box
                          sx={{
                            width: 200,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            size="large"
                            onChange={(event, newValue) =>
                              reviewHandler(event, newValue, service.provider)
                            }
                          />
                        </Box>
                      </dd>
                    ) : (
                      <dd>Vous pouver noter lorsque le service est fini</dd>
                    )}
                  </dl>
                </div>
              </div>
            )}
            <div className="row m-t-sm">
              <div className="col-lg-12"></div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Service;
