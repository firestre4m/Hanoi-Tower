import React from 'react';
import '../css/modal.css';

const Modal = (props) => {
    return (
        <div id="myModal" className="modal" >

            <div className="modal-content" align='center'>
            <div className="close">&times;</div>
                <p>YOU GOT IT !</p>
            </div>
        </div>
    );
}

export default Modal;