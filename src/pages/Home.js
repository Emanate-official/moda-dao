import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";

const Home = () => {
  return (
    <Layout>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <Card>
            </Card>
            <Card>
            </Card>
            <Card>
            </Card>
          </div>
          <div className="col">
            <Card>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
