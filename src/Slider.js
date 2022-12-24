import { useState } from 'react';
import { dataSlider } from './dataSlider';

function Slider() {
	const [popular, setPopular] = useState(0);
	const { name, image } = dataSlider[popular];

	const previousPopularSlider = () => {
		setPopular((popular) => {
			popular--;
			if (popular < 0) {
				return dataSlider.length - 1;
			}
			return popular;
		});
	};

	const nextPopularSlider = () => {
		setPopular((popular) => {
			popular++;
			if (popular > dataSlider.length - 1) {
				popular = 0;
			}
			return popular;
		});
	};

	return (
		<div className="heading container">
			<h2>popular categories</h2>
			<div className="slider">
				<img src={image} width="800px" alt="popular" />
			</div>
			<div>
				<p>{name}</p>
			</div>
			<div>
				<button className="btn" onClick={previousPopularSlider}>
					Previous
				</button>
				<button className="btn" onClick={nextPopularSlider}>
					Next
				</button>
			</div>
		</div>
	);
}

export default Slider;
