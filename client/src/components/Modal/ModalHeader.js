import React from "react";

const ModalHeader = ({ heading, onDismiss, noExit }) => {
  return (
    <div className={heading ? "modal-header" : "container-fluid p-2"}>
      {heading && <h5 className="modal-title">{heading}</h5>}
      {!noExit && (
        <button type="button" className="close" onClick={onDismiss}>
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};
export default ModalHeader;
