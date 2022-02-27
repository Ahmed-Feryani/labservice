import React from "react";
import snackBar from "../../libs/snackBar";
import Facilities from "../components/facilities/Facilities";
import Layout from "../components/layout/Layout";
import { useTracker } from "meteor/react-meteor-data";
import Stats from "../components/stats/Stats";
import Subjects from "../components/subjects/Subjects";
import Slides from "../components/swiper/Slides";

const Home = () => {
  return (
    <div>
      <Layout>
        <Slides></Slides>
        <Stats></Stats>
        <Subjects></Subjects>
        <Facilities></Facilities>
      </Layout>
    </div>
  );
};

export default Home;
