import {useState, useEffect} from 'react';
import BeerItem from '../components/BeerItem';
import './Beerlist.scss';

const Beerlist = () => {

    const [beers, setBeers] = useState([]);

    useEffect( () => {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => response.json())
        .then(json => setBeers(json))
    }, [beers]);
    
    return <section className='beer-list'>
        {beers.map(el => 
            <BeerItem
                key={el._id}
                id={el._id}
                name={el.name}
                tagline={el.tagline}
                img={el.image_url}
                contributed={el.contributed_by}
            />
            )}
    </section>;
}

export default Beerlist;