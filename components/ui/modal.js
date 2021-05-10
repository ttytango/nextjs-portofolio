import styles from "./modal.module.scss";
// import {useState} from "react";

export default function Modal(props) {
    const { id, title, description} = props;
    return (
        <div key={id} className={styles.modal}>
            <div className={styles.modalContent}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>

    );
}
