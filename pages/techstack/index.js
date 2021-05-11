import styles from "./techstack.module.scss";
import LogoCardList from "../../components/ui/logo-card-list";

export default function TechStackPage() {
	return (
		<section className={styles.techStackContent}>
			<LogoCardList />
		</section>
	);
}
