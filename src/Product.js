import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';


function Product() {
	const [clothes, setClothes] = useState(data);
	const chosenClothes = (searchTerm) => {
		const newClothes = data.filter((element) => element.searchTerm === searchTerm);
		setClothes(newClothes);
	};
	return (
		<div>
			<div className="heading">
				<h2>
					Our <span>Products</span>
				</h2>
			</div>
			<Buttons chosenClothes={chosenClothes} />
			<Clothes clothes={clothes} />
		</div>
	);
}

export default Product;
