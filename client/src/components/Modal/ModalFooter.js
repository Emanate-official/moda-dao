import React from "react";

const ModalFooter = ({ footer }) => {
  return footer ? <div className="modal-footer">{footer}</div> : null;
};

export default ModalFooter;
