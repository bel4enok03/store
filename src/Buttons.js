
function Buttons({chosenClothes}) {
	return (
		<div className="heading">
			<button className="btn" onClick={() => chosenClothes('Bodysuits')}>Bodysuits</button>
			<button className="btn" onClick={() => chosenClothes('Dresses')}>Dresses</button>
			<button className="btn" onClick={() => chosenClothes('Coats, Jackets & Pramsuits')}>Coats, Jackets & Pramsuits</button>
			<button className="btn" onClick={() => chosenClothes('Accessories')}>Accessories</button>
		</div>
	);
}

export default Buttons;
