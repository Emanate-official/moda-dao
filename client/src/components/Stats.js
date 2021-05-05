import React, { useState } from "react";

// import Web3 from "web3";
// import ERC20 from "../build/contracts/ERC20.json";

const Stats = () => {
  const [seconds, setSeconds] = useState(0);
  const [nfts, setNFTs] = useState(0);
  const [songs, setSongs] = useState(0);
  const [members, setMembers] = useState(0);
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [holders, setHolders] = useState(0);

  //   console.log(process.env.REACT_APP_CONTRACT_ADDRESS);

  //   const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.REACT_APP_NODE));

  //   const contract = new web3.eth.Contract(
  //     ERC20.abi,
  //     process.env.REACT_APP_CONTRACT_ADDRESS
  //   );

  //   const loadSupply = async () => {
  //     const result = await contract.methods.count().call();
  //     console.log(result);
  //     setSupply(result);
  //   }

  //   loadSupply();

  return (
    <div className="container">
      <h2>MODA STATS</h2>
      <p>DAO MEMBERS {members}</p>
      <p>SONGS ON-CHAIN {songs}</p>
      <p>SECONDS {seconds}</p>
      <p>NFT TRADES {nfts}</p>
      <p>TRADE VOLUME {volume}</p>
      <p>PRICE {price}</p>
      <p>HOLDERS {holders}</p>
    </div>
  );
};

export default Stats;
