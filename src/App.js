import React from "react";

import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/searchBox/searchBox";

import "./App.css";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			currentPage: 1,
			searchfield: "",
		};
	}

	componentDidMount = () => {
		this.fetchData(this.state.currentPage);
	};

	fetchData = async () => {
		// console.log(this.state);
		await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.currentPage}`)
			.then((res) => res.json())
			.then((response) => this.setState({ monsters: response.results }))
			.then(() => console.log(this.state));
	};

	handleSearch = (e) => this.setState({ searchfield: e.target.value });

	render() {
		const { monsters, searchfield, currentPage } = this.state;

		const nextPage = async () => {
			await this.setState({ currentPage: currentPage + 1 });
			this.fetchData();
			// await console.log(this.state.currentPage);
		};

		const prevPage = async () => {
			if (currentPage > 1) {
				await this.setState({ currentPage: currentPage - 1 });
				this.fetchData();
				// await console.log(this.state.currentPage);
			} else {
			}
		};

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchfield.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox placeholder="Search monsters" handleChange={this.handleSearch} />
				<button onClick={prevPage}>Prev</button>
				<button onClick={nextPage}>Next</button>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
