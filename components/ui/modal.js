import styles from "./modal.module.scss";
// import {useState} from "react";

export default function Modal(props) {
    const { id, title, description, onClose, setIsOpen} = props;

    function clickHandler(e) {
        e.preventDefault();
        setIsOpen(true);
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <div key={id} className={styles.modalContent} onClick={clickHandler}>

            <span className={styles.spanClose}><h1 className={styles.modalTitle}>{title}</h1><button className={styles.closeButton} onClick={onClose}>&#10540;</button></span>
                <p>{description}</p>
            </div>
        </div>

    );
}
