import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Profiles from "../components/Profiles";
import MetaMaskLoginButton from "react-metamask-login-button";
import { Formik, Form } from "formik";
import Input from "../components/form-inputs/Input";
import Loader from "../components/Loader";
import useSWR from "swr";
import ErrorMessage from "../components/ErrorMessage";

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
  const initialValues = [{ }];

  const eth = window.ethereum;
  console.log(eth);

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
                  <Input label="Your profile name" name="name" placeholder="Profile Name" />
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
