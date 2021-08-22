import './card.styles.css'

export const Card = ({ monster}) => {
	return (
		<div className="card-container">
			<img alt="monster" src={monster.image} />
			<h2>{monster.name}</h2>
			<p>{monster.email}</p>
		</div>
	);
}
