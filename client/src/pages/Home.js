import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Stats from "../components/Stats";

const Home = () => {
  const links = [
    { label: "About", route: "/stake" },
    { label: "Partners", route: "/partners" },
    { label: "People", route: "/people" }
  ];

  return (
    <Layout>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <h1>MODA DOA</h1>
            <h2>Velit ad ad anim laborum ipsum laboris.</h2>
            <p>
              Incididunt do est ipsum aliquip eu do eiusmod laboris ut cillum proident. Deserunt commodo esse duis commodo labore. Tempor sit quis excepteur non commodo deserunt duis ex ut.
            </p>
          </div>
          <div className="col">
            <h2>Stats</h2>
            <Stats></Stats>
            <p></p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
