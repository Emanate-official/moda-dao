import React from "react";
import Layout from "../components/Layout";

const Register = () => {
  const links = [
    { label: "Stake", route: "/stake" },
    { label: "Vote", route: "/vote" },
    { label: "Swap", route: "/swap" },
    { label: "Activity", route: "/actvity" }
  ];

  return (
    <Layout links={links}>
      <div className="container-fluid py-5">
        <h1>Register</h1>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
