import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Stats from "../components/Stats";

const Home = () => {
  const links = [
    { label: "Home", route: "/home" },
    { label: "Register", route: "/register" },
    { label: "About", route: "/about" },
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
        </div>
        <div className="row">
          <div className="col">
<<<<<<< HEAD
            <h2>Stats</h2>
            <Stats></Stats>
            <p></p>
=======
            <Stats>
            </Stats>
>>>>>>> 1145c25758b686635f28d56a6386b7656f3593c3
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
