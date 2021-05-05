import React, { useState } from "react";

const Explorers = () => {

  const events = [
    { event: "@Lazereys joined MODA DAO" }
  ]

  const [eth, setEth] = useState(activities);
  // const [activity, setActivity] = useState(0);

  return (
    <div>
      <h2>Explorers</h2>

      <h3>WAX</h3>
      <ul className="list-group">

        { eth.map((activity, index) => {
            <li class="list-group-item"></li>
            return <li key={ index }>{activity.label}</li>;
          })}
      </ul>

      <h3>ETH</h3>
      <ul className="list-group">

        { eth.map((activity, index) => {
            <li class="list-group-item"></li>
            return <li key={ index }>{activity.label}</li>;
          })}
      </ul>
    </div>
  );
};

export default Explorers;
