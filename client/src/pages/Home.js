import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Stats from "../components/Stats";

const Home = () => {
  const links = [
    { label: "About", route: "/about" },
    { label: "Partners", route: "/partners" },
    { label: "People", route: "/people" }
  ];

  return (
    <Layout>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <h1>Moda DAO</h1>
            <h2>Consectetur labore fugiat reprehenderit reprehenderit esse aute anim dolor nisi tempor commodo minim laborum velit.</h2>
            <p>Labore Lorem tempor irure velit consequat laborum Lorem dolore. Adipisicing culpa laborum duis amet consectetur ex reprehenderit mollit ad. Irure ea pariatur reprehenderit incididunt irure anim nostrud commodo et. Incididunt et eu laborum dolore voluptate cupidatat ad labore id aute anim enim. Proident officia eu laboris esse id nostrud nulla amet commodo exercitation irure. Duis sit ut tempor nisi reprehenderit anim veniam culpa fugiat esse minim qui labore. Lorem esse laboris do ullamco et exercitation eu et.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Stats>
            </Stats>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
