import styles from "./small-card.module.scss";
import {useState} from "react";
import Modal from "./modal";

export default function LogoCard(props) {
	const [isOpen, setIsOpen] = useState(false);

	const { id, title, icon, description } = props;


	const modalHandler=(event) => {
		event.preventDefault();
		setIsOpen(true);
	}
	const modalClose = () => {
		setIsOpen(false);
	}

	if (isOpen === true) {
		return <Modal key={id} title={title} description={description} onClose={modalClose}  onBlur={modalClose} setIsOpen={setIsOpen}/>
	}


		return (
			<div className={styles.smallLogoCard} key={id}>
				<img src={icon} alt={title} className={styles.logo}  onClick={modalHandler}/>
				<h3>{title}</h3>
				{/*<button>More</button>*/}
			</div>
		);
	}
