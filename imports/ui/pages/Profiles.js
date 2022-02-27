import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import ProfileItem from "../components/profiles/ProfileItem";
import SearchBar from "../components/SearchBar/SearchBar";
import { useTracker } from "meteor/react-meteor-data";
const Profiles = () => {
  const [profession, setprofession] = useState("");
  const [city, setcity] = useState("");
  const users = useTracker(() => {
    const isProvider = Meteor?.user()?.profile?.isProvider;
    const isClient = Meteor?.user()?.profile?.isClient;

    Meteor.subscribe("allUsers");
    if (profession && city) {
      return isProvider
        ? Meteor.users
            .find({
              "profile.isClient": true,
            })
            .fetch()
        : Meteor.users
            .find({
              "profile.isProvider": true,
              "profile.professionalSpecialty": profession,
              "profile.location": city,
            })
            .fetch();
    }
    if (profession) {
      return isProvider
        ? Meteor.users
            .find({
              "profile.isClient": true,
            })
            .fetch()
        : Meteor.users
            .find({
              "profile.isProvider": true,
              "profile.professionalSpecialty": profession,
            })
            .fetch();
    }
    if (city) {
      return isProvider
        ? Meteor.users
            .find({
              "profile.isClient": true,
            })
            .fetch()
        : Meteor.users
            .find({
              "profile.isProvider": true,
              "profile.location": city,
            })
            .fetch();
    }
    return isProvider
      ? Meteor.users
          .find({
            "profile.isClient": true,
          })
          .fetch()
      : Meteor.users
          .find({
            "profile.isProvider": true,
          })
          .fetch();
  });
  return (
    <Layout>
      <SearchBar setprofession={setprofession} setcity={setcity}></SearchBar>
      <div className="profiles-box">
        <div className="profiles-container">
          {users?.map((user) => {
            return <ProfileItem {...user.profile} id={user._id}></ProfileItem>;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Profiles;
