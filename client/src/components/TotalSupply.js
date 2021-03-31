import React, { useState } from "react";

import Web3 from "web3";
import ERC20 from "../build/contracts/ERC20.json";

const TotalSupply = () => {
  const [supply, setSupply] = useState(0);

  console.log(process.env.REACT_APP_CONTRACT_ADDRESS);

  const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.REACT_APP_NODE));

  const contract = new web3.eth.Contract(
    ERC20.abi,
    process.env.REACT_APP_CONTRACT_ADDRESS
  );

  const loadSupply = async () => {
    const result = await contract.methods.count().call();
    console.log(result);
    setSupply(result);
  }

  loadSupply();

  return (
    <h2>{supply}</h2>
  );
};

export default TotalSupply;
