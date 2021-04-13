import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Profiles from "../components/Profiles";
import MetaMaskConnectButton from "../components/MetaMaskConnectButton";
import { Formik, Form } from "formik";
import Input from "../components/form-inputs/Input";
import useSWR from "swr";
import ErrorMessage from "../components/ErrorMessage";
import getWalletAddress from "../apis/web3/getWalletAddress";
import connectWeb3 from "../apis/web3/connect";

const Register = () => {
  const links = [
    { label: "Stake", route: "/stake" },
    { label: "Vote", route: "/vote" },
    { label: "Swap", route: "/swap" },
    { label: "Activity", route: "/actvity" }
  ];

  const { data, error } = useSWR("/profile", { initialData: [], revalidateOnMount: true });
  console.log(data);

  const isLoading = !data && !error;
  const isSubmitting = false;
  // const [isSubmitting, setShow] = useState("");
  const [connecetedAddress, setConnectedAddress] = useState("0x00");
  const initialValues = {
    name: "",
    address: connecetedAddress 
  };
  
  useEffect(async () => {
    const address = await getWalletAddress();
    if (address != null)
      setConnectedAddress(address);
  }, []);
  
  // Form submission handler.
  const registerWithMetaMask = async (values) => {
    await connectWeb3();
    const address = await getWalletAddress();
    setConnectedAddress(address);
    console.log(`Registering with name "${values.name}" ` +
      `and address ${address}`);
  };

  return (
    <Layout links={links}>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="col md-3">
            <h1>Register</h1>
            <Formik
              onSubmit={registerWithMetaMask}
              initialValues={initialValues}>
              <Form className="register-form">
                <Input
                  label="Your profile name"
                  name="name"
                  placeholder="Profile Name"
                />
                <Input
                  disabled
                  name="address"
                  label="Your Ethereum Address"
                  value={connecetedAddress}
                />
                <MetaMaskConnectButton
                  type="submit"
                  text="Register with MetaMask"
                  loading={isLoading}
                  disabled={isSubmitting}
                />
              </Form>
            </Formik>
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
