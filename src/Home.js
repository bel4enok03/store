import Slider from './Slider';

function Home() {
	return (
		<div>
			<div className="home">
				<div className="content">
					<h3>shopping as </h3>
                    <h3>you love</h3>
					<button className="btn">see what's on sale</button>
				</div>
			</div>
			<div>
				<Slider />
			</div>
		</div>
	);
}

export default Home;
