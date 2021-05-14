import {useRef} from "react";
import styles from "./searchbox.module.scss";
function SearchByKeyword(props) {
	const keywordInputRef = useRef();
	function searchHandler(event){
		event.preventDefault();
		const tagged = keywordInputRef.current.value;
		props.onSearch(tagged);
	}
	return <form onSubmit={searchHandler}>
		<div>
			<label htmlFor="keyword">Tags: </label>
			<select id="keyword" ref={keywordInputRef}>
				<option value="react">React</option>
				<option value="python">Javascript</option>
				<option value="javascript">Django</option>
				<option value="scss">SCSS/SASS</option>
			</select>
		</div>
		<button>Search</button>
	</form>;
}

export default SearchByKeyword;
