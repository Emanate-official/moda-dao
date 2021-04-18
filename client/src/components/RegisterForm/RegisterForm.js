import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Redirect } from "react-router-dom";
import validate from "./validate";
import moda from "../../../apis/moda";
import Loader from "../../Loader";
import Input from "../form-inputs/Input";
import { AuthContext } from "../../Auth";
import "./RegisterForm.scss";

const RegisterForm = ({
  initialValues: _inititalValues,
  noRedirect,
  onLogin
}) => {

  const { user, login } = useContext(AuthContext);
  // if (user && !noRedirect) return <Redirect to="/" />;

  const onSubmit = async (values, actions) => {
    try {
      const { data: user } = await moda.open.post("/user/authenticate", values);
      login(user);
      if (onLogin) onLogin();
    } catch (e) {
      console.log(e);
      actions.setErrors({
        password: "Unable to register. Please check your email or password."
      });
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="register-form">
          <Input name="address" placeholder="0x00" />
          <button
            className="btn btn-primary btn-block relative d-flex justify-content-center"
            type="submit"
            disabled={isSubmitting}
          >
            <Loader
              loading={isSubmitting}
              noBackground
              noStretch
              light
              diameter="1.4rem"
            />
            <span className="mx-2">Register with MetaMask</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
