import React from "react";
import classes from "./modal.module.css";

const Modal = ({ active, setActive }) => {
  
  return (

    <div
      className={`${classes.modal} ${active ? classes.modalActive : ""}`}
      onClick={() => setActive(false)}
    >
      <div
        className={`${classes.modalContent} ${
          active ? classes.modalContentActive : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes.modalTitle}>SUCCESS!</h2>
        <div className={classes.modalText}>
          <p>
          You have successfully subscribed to the email newsletter
          </p>
        </div>
        <button type='submit' onClick={() => setActive(false)} className={classes.modalCloseBtn}>
          <span className={classes.modalCloseBtnText}>Close</span>
        </button>
        <div  onClick={() => setActive(false)} class={classes.closeModal}></div>
      </div>
    </div>
  );
};

export default Modal;
