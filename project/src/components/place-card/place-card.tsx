import { Link } from 'react-router-dom';
import {Offer} from '../../types/offer';

type OfferProps = {
  offer: Offer;
  handleCardOver: (id: number) => void;
  handleCardOut: () => void;
}

const PERCENT_MULTIPLIER = 20;

function PlaceCard({offer, handleCardOver, handleCardOut}: OfferProps): JSX.Element {
  const ratingPercent = `${String((Math.round(offer.ratingStars)) * PERCENT_MULTIPLIER)}%`;

  return (
    <article className="cities__card place-card" onMouseEnter={() => handleCardOver(offer.id)} onMouseLeave={handleCardOut}>
      {
        offer.premium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.image.src} width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.cost}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.propertyName}</Link>
        </h2>
        <p className="place-card__type">{offer.propertyType}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
