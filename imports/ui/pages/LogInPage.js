import React from "react";
import Layout from "../components/layout/Layout";
import Login from "../log/Login";

const LogInPage = () => {
  return (
    <Layout>
      <div className="login-page">
        <Login></Login>
      </div>
    </Layout>
  );
};

export default LogInPage;
