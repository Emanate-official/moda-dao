import React, { useState, useEffect } from "react";
import web3 from "../apis/web3";
import isWeb3Available from "../apis/web3/isAvailable";
import Loader from "./Loader";

/**
 * Component to use inside Forms for requesting to connect with MetaMask.
 * This component does not handle the connection, only displays to the user
 * whether they have MetaMask installed or not.
 * Connecting to web3 should be done on the form submission handler.
 */
const MetaMaskLoginButton = ({ text, loading, disabled }) => {
  const [isAvailable, setIsAvailable] = useState(false);
  
  useEffect(() => {
    setIsAvailable(isWeb3Available());
  }, []);
  
  const handleClick = async (event) => {
    if (isAvailable)
      // Let form handler manage submission.
      return;
    
    // Open MetaMask website on a new tab if not installed.
    event.preventDefault();
    window.open("https://metamask.io/", "_blank").focus();
  };
  
  return (
    <button
      className="btn btn-primary btn-block relative d-flex justify-content-center"
      type="submit"
      disabled={!isAvailable || disabled}
      // Pointer cursor even if disabled, redirect to MetaMask page on click.
      style={{ cursor: "pointer" }}
      onClick={handleClick}
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