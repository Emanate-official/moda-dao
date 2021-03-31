import React, { useState, useEffect, useRef } from "react";
import { Alert } from "react-bootstrap";
import LoginForm from "./RegisterForm";
import Modal from "../../Modal";
import axios from "axios";

let pendingRequests = [];

const RefreshRegisterModal = () => {
  const [isOpen, setOpen] = useState(false);
  const el = useRef(null);
  const onDismiss = () => setOpen(false);
  const onLogin = () => {
    const { token } = JSON.parse(localStorage.getItem("user"));
    pendingRequests.forEach(({ config, res }) => {
      if (token) config.headers.Authorization = `Bearer ${token}`;
      res(axios(config));
    });
    pendingRequests = [];
    onDismiss();
  };

  // Hide/Show other modals if 401 received while modal is open
  useEffect(() => {
    if (!el.current) return;
    const children = document.querySelector("#modal").children;
    if (isOpen) {
      Object.keys(children).forEach(key => {
        if (!children[key].contains(el.current))
          children[key].style.display = "none";
      });
    } else {
      Object.keys(children).forEach(key => {
        if (!children[key].contains(el.current))
          children[key].style.display = "block";
      });
    }
  }, [isOpen]);

  // Catch any 401 errors
  useEffect(() => {
    moda.secure.interceptors.response.use(
      res => res,
      async e => {
        const original = e.config;
        if (e?.response?.status !== 401) throw e;
        setOpen(true);
        return new Promise(res =>
          pendingRequests.push({ config: original, res })
        );
      }
    );
  }, []);

  return (
    <Modal isOpen={isOpen} onDismiss={onDismiss} heading="Login" noExit>
      <div className="py-3" ref={el}>
        <Alert variant="primary" children="Your session has expired." />
        <LoginForm noRedirect onLogin={onLogin} />
      </div>
    </Modal>
  );
};

export default RefreshRegisterModal;
