import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ error, isHidden, ...props }) => {
  let message = error;
  const data = error?.response?.data;

  if (typeof error !== "string") {
    message = data?.error || error?.message || error;
  }
  if (typeof data === "string" && data) {
    message = data;
  }
  return error && !isHidden ? (
    <Alert variant="danger" {...props}>
      {message}
    </Alert>
  ) : null;
};

export default ErrorMessage;
