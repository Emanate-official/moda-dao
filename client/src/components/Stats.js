<<<<<<< HEAD
const Stats = () => {
    return (
      <div className="card">
        
      </div>
    );
  };
  
  export default Stats;
=======
import React, { useState } from "react";

// import Web3 from "web3";
// import ERC20 from "../build/contracts/ERC20.json";

const Stats = () => {
    const [seconds, setSeconds] = useState(0);
    const [nfts, setNFTs] = useState(0);
    const [songs, setSongs] = useState(0);
    const [memebers, setMembers] = useState(0);

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
      <div>
        <h2>Stats</h2>
        <p>Seconds of audio streamed</p>
        <p>NFTs traded</p>
        <p>Songs on chain</p>
        <p>DAO members</p>
      </div>
  );
};

export default Stats;
>>>>>>> 1145c25758b686635f28d56a6386b7656f3593c3
