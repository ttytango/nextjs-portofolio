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

	if (isOpen === true) {
		return <Modal key={id} title={title} description={description}/>
	}


		return (
			<div className={styles.smallLogoCard} key={id}>
				<img src={icon} alt={title}/>
				<h3>{title}</h3>
				<button onClick={modalHandler}>Button</button>
			</div>
		);
	}
