import styles from "./card.module.scss";

export default function Card(props) {
	return <section className={styles.card}>{props.children}</section>;
}
