function Clothes({ clothes }) {
	return (
		<div className="products">
			{clothes.map((element) => {
				const { id, name, price, image } = element;
				return (
					<div key={id} className='product-card '>
						<img src={image} width="270px" height="400px" alt="clothes" />
                        <div>
                            <p>{name}</p>
                            <p>$ {price}</p>
                        </div>
					</div>
				);
			})}
		</div>
	);
}

export default Clothes;