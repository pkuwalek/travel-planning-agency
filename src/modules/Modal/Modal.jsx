import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

const Modal = (props) => {
    const { show, closeModal, h1, p1 } = props;
    const modal = (
      <>
        <div className={show ? "overlay" : "hide"} onClick = { closeModal } />
            <div className={show ? "modal" : "hide"}>
                <button className = 'closebtn' onClick = { closeModal }>X</button>
                <h1>{ h1 }</h1>
                <p>{ p1 }</p>
                <p>Have a good day!</p>
            </div>
      </>
    );
    return ReactDOM.createPortal(modal, document.getElementById('modal-root'));
}

export default Modal;