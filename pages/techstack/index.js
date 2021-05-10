import styles from "./techstack.module.scss";
import LogoCardList from "../../components/ui/logo-card-list";

export default function TechStackPage(props) {
	return (
		<section className={styles.techStackContent}>
			<LogoCardList />
		</section>
	);
}
