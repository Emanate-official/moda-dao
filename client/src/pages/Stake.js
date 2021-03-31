import React from "react";
import Layout from "../components/Layout";
import Table from "../components/Tables/StakeTable";

const Stake = () => {
  return (
    <Layout>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col">
            <h1>Stake</h1>
            <Table>
              
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stake;
