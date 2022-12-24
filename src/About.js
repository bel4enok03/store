import { useState } from 'react';

function About() {

    const [data ] = useState(`Babyshop - for premium children's clothes Babyshop was founded in 2006 with vision of building the
    best online store in the Nordics for children clothing. We want to inspire by offering an exclusive
    shopping experience and excellent customer service with the best mixture of high-quality brands.
    Here you'll find baby and children's clothes, shoes, toys, strollers, car seats, maternity clothes,
    accessories and more for children 0-10 years.`)

	const [readMore, setReadMore] = useState(false);


	return (
		<div>
			<div className="about"></div>
			<div className='about-text'>
				<p>
					{readMore ? data : data.substring(0, 166) + '....'}
					<button onClick={() => setReadMore(!readMore) }>{readMore ? 'Show less' : 'ReadMore'}</button>
				</p>
			</div>
		</div>
	);
}

export default About;
