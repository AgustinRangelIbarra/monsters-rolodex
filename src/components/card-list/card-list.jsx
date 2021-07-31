import { Card } from "../card/card";
import "./card-list.styles.css";

export const CardList = ({monsters}) => {
	console.log(monsters);
	return (
		<div className="card-list">
			{monsters.map((monster) => (
				<Card key={monster.id} monster={monster}/>
			))}
		</div>
	);
};
