import React from 'react';
import ReactDOM from 'react-dom';
import './modal.scss';

const Modal = (props) => {
    const { show, closeModal } = props;
    const modal = (
      <>
        <div className={show ? "overlay" : "hide"} onClick = { closeModal } />
            <div className={show ? "modal" : "hide"}>
                <button className = 'closebtn' onClick = { closeModal }>X</button>
                <h1>Congratulations!</h1>
                <p>You just clicked a completely useless button.</p>
                <p>Have a good day!</p>
            </div>
      </>
    );
    return ReactDOM.createPortal(modal, document.getElementById('modal-root'));
}

export default Modal;