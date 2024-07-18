import React from "react";
import "./Modal.css";
import { useLockBodyScroll } from "@uidotdev/usehooks"
const Modal = ({ setModal }) => {
  useLockBodyScroll()
  return (
    <>
      <div
        className="background-modal"
        onClick={() => setModal(false)}
      ></div>

      <div className="Modal">
        <h1>You are not logged in!</h1>
        <p>To see the game details you must first login.</p>
        <button className='modal-btn' onClick={() => setModal(false)}>Ok</button>
      </div>
    </>
  );
};

export default Modal;
