import { Fragment, useEffect, useState } from "react";
import dateFormat from "dateformat";
import { MdDoneAll } from "react-icons/md";
// import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { addReview, finishRepair, getRepair } from "../../redux/actions/repair";
import "./service.css";
import { message } from "antd";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import Spinner from "../layout/Spinner";
import { useParams } from "react-router-dom";

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
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const service = useSelector((state) => state.repairReducer.repair);
  const rev = Number(labels2[service?.reviews[0]?.text]);

  const [value, setValue] = useState(rev ? rev : 3);
  const [hover, setHover] = useState(-1);

  useEffect(() => {
    setValue(rev);
  }, [rev]);
  useEffect(() => {
    dispatch(getRepair(id));
  }, [dispatch, id]);

  const finish = async (desc, id) => {
    window.confirm("Mark as finished?");
    await dispatch(finishRepair(id));
    message.success(`${desc} successfully finished`);
    dispatch(getRepair(id));
  };

  return (
    <Fragment>
      {!service ? (
        <Spinner />
      ) : (
        <div className="out">
          <div className="in">
            <div className="top">
              <div className="image">
                <div className="image1">
                  <img src={service.img_user} alt="" />
                </div>
                <h3>{service.name_user}</h3>
              </div>

              <h1 className="desc">{service.description}</h1>
            </div>
            <div className="bottom">
              <div className="ser-left">
                <div className="img-pres">
                  <img src={service.img_professional} alt="" />
                </div>
                <h3 className="name-pres">
                  Service délivré par: <h2>{service.name_professional}</h2>
                </h3>
                {service.finished?.isFinished ? (
                  <div className="status Finish">
                    <MdDoneAll style={{ fontSize: "20px" }} /> Finished
                  </div>
                ) : user?.isProfessional ? (
                  <>
                    <div className="status notFinish"> not finished</div>{" "}
                    <h5
                      onClick={() => finish(service.description, service?._id)}
                    >
                      Mark as Finished
                    </h5>
                  </>
                ) : (
                  <div className="status notFinish"> not finished</div>
                )}
              </div>
              <div className="ser-right">
                <h2>Description</h2>
                <div className="ser_img">
                  <h4>{service.description}</h4>
                  <img src={service.image_service} alt="service" />
                </div>
                <hr />
                <h2>Informations pratiques</h2>
                <div className="date">
                  <h3>Date de création du demande:</h3>
                  <h4>{dateFormat(service.created, "mmmm dS, yyyy")}</h4>
                </div>
                {service.finished.isFinished && (
                  <div className="date">
                    <h3>Date de réalisation du travail:</h3>
                    <h4>
                      {dateFormat(
                        service.finished.date,
                        "mmmm dS, yyyy,h:MM TT"
                      )}
                    </h4>
                  </div>
                )}
                {/* <div className="date">
              <h3>Numero de telophone:</h3>
              <h4>{service?.phone_user}</h4>
            </div> */}

                {user?.isProfessional ? (
                  <>
                    <div className="date">
                      <h3>Numero de telophone:</h3>
                      <h4>{service?.phone_user}</h4>
                    </div>
                    <hr />
                    {service.reviews?.length === 0 ? (
                      <h3>Le client n'a pas donné son avis </h3>
                    ) : (
                      <div className="rating">
                        <h3>Note du client:</h3>
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
                            value={labels2[service.reviews[0]?.text]}
                            readOnly
                          />
                          {value !== null && (
                            <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                          )}
                        </Box>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="rating">
                    <h3>Noter le travail: </h3>
                    {service.finished.isFinished ? (
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
                          onChange={(event, newValue) => {
                            setValue(newValue);
                            dispatch(
                              addReview(service._id, { text: labels[newValue] })
                            );
                          }}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          emptyIcon={
                            <StarIcon
                              style={{ opacity: 0.55 }}
                              fontSize="inherit"
                            />
                          }
                        />
                        {value !== null && (
                          <Box sx={{ ml: 2 }}>
                            {labels[hover !== -1 ? hover : value]}
                          </Box>
                        )}
                      </Box>
                    ) : (
                      <h4>Vous pouver noter lorsque le service est fini</h4>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Service;
