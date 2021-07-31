import './card.styles.css'

export const Card = ({key, monster}) => {
	return (
		<div className="card-container">
			<img alt="monster" src={`https://robohash.org/${monster.id}?set=set1&size=180x180`} />
			<h2>{monster.name}</h2>
			<p>{monster.email}</p>
		</div>
	);
}
