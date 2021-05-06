import React, { useState } from "react";
import ExplorerTable from "../components/Tables/ExplorerTable";

const Explorers = () => {

  const eth_events = [
    { event: "@Lazereys joined MODA DAO" }
  ]

  const eos_events = [
    { event: "@Lazereys joined MODA DAO" }
  ]

  const [eth, setEth] = useState(eth_events);
  const [eos, setEos] = useState(eos_events);
  // const [activity, setActivity] = useState(0);

  return (
    <div>
      <h2>Explorers</h2>

      <h3>WAX</h3>
      <ExplorerTable data={eos}></ExplorerTable>

      <h3>ETH</h3>
      <ExplorerTable data={eth}></ExplorerTable>

    </div>
  );
};

export default Explorers;
