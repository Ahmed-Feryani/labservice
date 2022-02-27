import React from "react";
import { Link } from "react-router-dom";
import { ServicesCollection } from "../../../api/services/services";
import { Table, Tag, Space } from "antd";

import { useTracker } from "meteor/react-meteor-data";
import ServicesSeeker from "./ServicesSeeker";
import ServicesProvider from "./ServicesProvider";
import "./services.css";

const Services = () => {
  const isProvider = useTracker(() => {
    return Meteor?.user()?.profile?.isProvider;
  });
  const isClient = useTracker(() => {
    return Meteor?.user()?.profile?.isClient;
  });

  return (
    <div>
      {isClient && <ServicesSeeker></ServicesSeeker>}
      {isProvider && <ServicesProvider></ServicesProvider>}
    </div>
  );
};

export default Services;
