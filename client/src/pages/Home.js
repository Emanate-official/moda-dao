import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Stats from "../components/Stats";
import Members from "../components/Members";
import Explorers from "../components/Explorers";

const Home = () => {

  const links = [
    { label: "Project Information", route: "/stake" },
    { label: "DAO HUB", route: "/dao" },
    { label: "Music 3.0", route: "/music" }
  ];

  return (
    <Layout>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <h1>Music 3.0 is here.</h1>
            <h2>Welcome to MODA DAO</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col-3">
            <Stats>
            </Stats>
          </div>
          <div className="col-3">
            <Members>
            </Members>
          </div>
          <div className="col-3">
            <Explorers>
            </Explorers>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
