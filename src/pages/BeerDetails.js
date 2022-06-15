import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './BeerDetails.scss';

const BeerDetails = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);

    useEffect( () => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response => response.json())
        .then(json => {
            setDetails(json);
        })
    }, [id])

    return (
        <section className='beer-details'>
            <img src={details.image_url} alt={details.name} />
            <h5>{details.name}</h5>
            <h4>{details.tagline}</h4>
            <div className="beer-details__info">
                <span>First Brewed</span>
                <span>{details.first_brewed}</span>
            </div>
            <div className="beer-details__info">
                <span>Attenuation Level</span>
                <span>{details.attenuation_level}</span>
            </div>
            <p>{details.description}</p>
            <Link to={'/beers'}><button className='beer-details__btn'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 13.28125 6.78125 L 4.78125 15.28125 L 4.09375 16 L 4.78125 16.71875 L 13.28125 25.21875 L 14.71875 23.78125 L 7.9375 17 L 28 17 L 28 15 L 7.9375 15 L 14.71875 8.21875 Z"/></svg></button></Link>
        </section>
    )
}

export default BeerDetails;