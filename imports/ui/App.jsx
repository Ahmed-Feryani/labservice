import React from "react";

import Home from "./pages/Home.js";

import { Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact.js";
import AboutPage from "./pages/AboutPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import Profiles from "./pages/Profiles.js";
import LogInPage from "./pages/LogInPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import { useTracker } from "meteor/react-meteor-data";
import AddServicePage from "./pages/AddServicePage.js";
import ServicesPage from "./pages/ServicesPage.js";
import ServicePage from "./pages/ServicePage.js";
import Snackbars from "./components/snackBar/SnackBar.js";
import MyProfilePage from "./pages/MyProfilePage.js";

export const App = () => {
  const isAuthenticated = useTracker(() => {
    return Meteor.userId();
  });
  return (
    <div>
      <Snackbars></Snackbars>
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/contact" element={<Contact></Contact>} />
        <Route exact path="/about" element={<AboutPage></AboutPage>} />
        <Route exact path="/services" element={<ServicesPage></ServicesPage>} />

        <Route
          exact
          path="/profile/:id"
          element={<ProfilePage></ProfilePage>}
        />
        <Route
          exact
          path="/my-profile/:id"
          element={<MyProfilePage></MyProfilePage>}
        />

        <Route
          exact
          path="/service/:id"
          element={<ServicePage></ServicePage>}
        />

        <Route
          exact
          path="/register"
          element={<RegisterPage ok={isAuthenticated}></RegisterPage>}
        />
        <Route
          exact
          path="/add_service/:id"
          element={<AddServicePage></AddServicePage>}
        />
        <Route exact path="/profiles" element={<Profiles></Profiles>} />
        <Route
          path="/login"
          element={<LogInPage ok={isAuthenticated}></LogInPage>}
        />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
};
