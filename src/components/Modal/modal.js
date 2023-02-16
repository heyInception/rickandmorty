import React from "react";
import "./modal.scss"
import rickImg from "../../assets/img/rick.png"
import rickGreenImg from "../../assets/img/rick-green.png"
import mortyImg from "../../assets/img/morty.png"

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal modal-active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <img className="ricktop" src={rickImg} alt="rickImg"/>
                <img className="mortyright" src={mortyImg} alt="mortyImg"/>
                <img className="rickleft" src={rickGreenImg} alt="mortyImg"/>
                {children}
            </div>
        </div>
    )
}

export default Modal