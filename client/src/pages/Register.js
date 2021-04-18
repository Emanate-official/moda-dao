import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Profiles from "../components/Profiles";
import MetaMaskLoginButton from "react-metamask-login-button";
import { Formik, Form } from "formik";
import Input from "../components/form-inputs/Input";
import Loader from "../components/Loader";
import useSWR from "swr";
import ErrorMessage from "../components/ErrorMessage";
import Web3 from "web3";

const Register = () => {
  const links = [
    { label: "Stake", route: "/stake" },
    { label: "Vote", route: "/vote" },
    { label: "Swap", route: "/swap" },
    { label: "Activity", route: "/actvity" }
  ];

  const { data, error } = useSWR("/profile", { initialData: [], revalidateOnMount: true });

  const [loading, setLoading] = useState(false); // Loading button state

  const isLoading = !data && !error;
  const isSubmitting = false;
  // const [isSubmitting, setShow] = useState("");
  const [address, setAddress] = useState("");
  const initialValues = { 
    address: "0x0001",
    profile: "Test"
  };

  const web3 = new Web3(new Web3.providers.WebsocketProvider(process.env.REACT_APP_NODE));

  const loadAddresses = async () => {
    const { ethereum } = window;

    if (typeof ethereum !== "undefined") {
      // setError("MetaMask not installed!");
      // return false;
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log(accounts);
      setAddress(accounts[0])
    }

    const coinbase = await web3.eth.getCoinbase();
		if (!coinbase) {
			window.alert('Please activate MetaMask first.');
			return;
		}
  }

	const handleAuthenticate = async ({
		publicAddress,
		signature,
	}) => {
		// fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
		// 	body: JSON.stringify({ publicAddress, signature }),
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	method: 'POST',
		// }).then((response) => response.json());
  }

  const handleSignMessage = async ({
		publicAddress,
		nonce,
	}) => {
		try {

			const signature = await web3.eth.personal.sign(
				`I am signing my one-time nonce: ${nonce}`,
				publicAddress,
				'' // MetaMask will ignore the password argument here
			);

			return { publicAddress, signature };
		} catch (err) {
			throw new Error(
				'You need to sign the message to be able to log in.'
			);
		}
	};


  loadAddresses()

  return (
    <Layout links={links}>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col md-3">
            <h1>Register</h1>
            <Formik
              initialValues={initialValues}>
                <Form className="register-form">
                  <Input label="Your Ethereum Address" name="address" placeholder="0x00" />
                  <Input label="Your profile name" name="profile" placeholder="Profile Name" />
                  <button
                    className="btn btn-primary btn-block relative d-flex justify-content-center"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    <Loader
                      loading={isLoading}
                      noBackground
                      noStretch
                      light
                      diameter="1.4rem"
                    />
                    <span className="mx-2">Register with MetaMask</span>
                  </button>
                </Form>
            </Formik>
            <MetaMaskLoginButton />
          </div>
          <div className="col md-9">
            <h1>Creative profiles</h1>
            <div>
              <Profiles profiles={data}></Profiles>
              <ErrorMessage error={error} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
