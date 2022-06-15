import './Home.scss';
import imgRandom from '../images/randombeer.png';
import imgAll from '../images/allbeers.png';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<header className='home'>
			<div className='home__container'>
				<Link to={'/beers'}>
					<div className='home__container__flex'>
						<img src={imgAll} alt='all beers' />
						<h3>All Beers</h3>
					</div>
				</Link>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Justo, a, eleifend vitae varius venenatis.
				</p>
			</div>
			<div className='home__container'>
				<Link to={'/beer/random'}>
                    <div className='home__container__flex'>
                        <img src={imgRandom} alt='random beers' />
                        <h3>Random Beers</h3>
                    </div>
                </Link>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Justo, a, eleifend vitae varius venenatis.
				</p>
			</div>
		</header>
	);
};
export default Home;
