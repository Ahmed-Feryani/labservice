import React from "react";
import "./navbar.css";
import { Meteor } from "meteor/meteor";
import { Link, useNavigate } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
//import { useDispatch, useSelector } from "react-redux";
// import { Menu, Dropdown, Button } from "antd";
//import { logout } from "../../redux/actions/user";
import { useTranslation } from "react-i18next";

import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Notification } from "../../../api/notification/notification";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Language from "../Language/Language";
const Navbar = () => {
  const { t } = useTranslation();
  const userName = useTracker(() => {
    return Meteor.user()?.profile?.name;
  });
  const notifications = useTracker(() => {
    Meteor.subscribe("notification");
    console.log("notification::", Notification.find().fetch());
    return Notification.find().fetch();
  });
  //const dispatch = useDispatch();
  let navigate = useNavigate();
  //const isAuth = useSelector((state) => state.userReducer.isAuth);
  //const user = useSelector((state) => state.userReducer.user);

  // socket:
  // const [notifications, setNotifications] = useState([]);
  // const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const deleteNotifHandler = (id) => {
    Meteor.call("notification.remove", id);
  };
  const logoutHandler = () => {
    Meteor.logout();
    navigate("/", { replace: true });
    console.log("logout");
  };
  const authLinks = (
    <div className="header">
      <Link to="/" className="logo">
        {" "}
        <i className="fas fa-solid fa-wrench" /> e-Service{" "}
      </Link>
      <nav className="navbar ">
        <div id="close-navbar" className="fas fa-times" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Link to="/services"> {t("My services")} </Link>

        <Link to="/profiles">Profiles</Link>
        {/* <Link to="/all_users">Users</Link> */}

        <div
          className="icon"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <div>
            <NotificationsIcon
              style={{
                fontSize: "20px",
              }}
            ></NotificationsIcon>
            {!!notifications.length && (
              <div className="counter"> {notifications.length} </div>
            )}
          </div>
        </div>

        {!!notifications?.length && (
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {notifications.map((notif) => {
              return (
                <Link to={`/service/${notif.serviceId}`}>
                  <MenuItem
                    onClick={() => {
                      deleteNotifHandler(notif._id);
                    }}
                  >
                    {" "}
                    <p
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {notif.subject}
                    </p>{" "}
                  </MenuItem>
                </Link>
              );
            })}
          </Menu>
        )}

        <Dropdown>
          <Dropdown.Toggle key={"down"} variant="secondary" className="noun">
            <span className="ser"> {userName} </span>
            <i className="fas fa-sort-down"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>
              <Link className="ll" to={`/my-profile/${Meteor.userId()}`}>
                My Profile
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <div className="ll" onClick={logoutHandler}>
                <i className="fas fa-sign-out-alt" />{" "}
                <span className="hide-sm">Logout</span>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Language></Language>
      </nav>
    </div>
  );
  const guestLinks = (
    <div className="header">
      <Link to="/" className="logo">
        {" "}
        <i className="fas fa-solid fa-wrench" /> e-service{" "}
      </Link>
      <nav className="navbar ">
        <div id="close-navbar" className="fas fa-times" />
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <div className="icons">
          <Link to="/login">
            <AccountCircleIcon
              style={{
                color: "#444",
                fontSize: "2rem",
              }}
            ></AccountCircleIcon>
          </Link>
        </div>
        <Language></Language>
      </nav>
    </div>
  );
  return <div className="hd">{Meteor.userId() ? authLinks : guestLinks}</div>;
};

export default Navbar;
