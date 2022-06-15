import './Beeritem.scss';
import {Link} from 'react-router-dom';

const BeerItem = (props) => {

    return(
        <div className="beer-item">
            <img src={props.img} alt={props.name} />
            <article className="beer-item__article">
                <h2>{props.name}</h2>
                <h4>{props.tagline}</h4>
                <p>Created by {props.contributed?.slice(0, props.contributed.indexOf('<'))}</p>
                <Link to={`/beer/${props.id}`}><button>Details</button></Link>
            </article>
        </div>
    )
}

export default BeerItem;