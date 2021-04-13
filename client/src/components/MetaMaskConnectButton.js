import React, { useState, useEffect } from "react";
import web3 from "../apis/web3";
import isWeb3Available from "../apis/web3/isAvailable";
import Loader from "./Loader";

const MetaMaskLoginButton = ({ onConnect, text, loading, disabled }) => {
  const [isAvailable, setIsAvailable] = useState(false);
  
  useEffect(() => {
    setIsAvailable(isWeb3Available());
  }, []);
  
  const connect = async (event) => {
    event?.preventDefault();
    if (!isAvailable) {
      console.log("opening");
      window.open("https://metamask.io/", "_blank").focus();
      return;
    }
    await web3.currentProvider.enable();
    onConnect();
  };
  
  return (
    <button
      className="btn btn-primary btn-block relative d-flex justify-content-center"
      type="submit"
      disabled={!isAvailable || disabled}
      // Pointer cursor even if disabled, redirect to MetaMask page on click.
      style={{ cursor: "pointer" }}
      onClick={connect}
    >
      <Loader
        loading={loading}
        noBackground
        noStretch
        light
        diameter="1.4rem"
      />
      <span className="mx-2">
        { isAvailable ? text : "Install MetaMask" }
      </span>
    </button>
  )
};

export default MetaMaskLoginButton;