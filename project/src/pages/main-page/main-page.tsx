import { Link } from 'react-router-dom';
import {useState} from 'react';
import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
import {offers as offersMock} from '../../mocks/offers';
import {Offers as OffersType} from '../../types/offer';
import {cities} from '../../mocks/cities';
import {City} from '../../types/city';
import Map from '../../components/map/map';

type MainPageProps = {
  placesFoundCount: number;
  offers: OffersType;
}

const CURRENT_CITY_ID = 4;

function MainPage({placesFoundCount, offers}: MainPageProps): JSX.Element {
  const [hoverCardId, setHoverCardId] = useState(0);

  const currentCity: City | undefined = cities.find((cityData) => cityData.id === CURRENT_CITY_ID);

  if (currentCity === undefined) {
    return (
      <></>
    );
  }

  const handleCardOver = (id: number) => {
    setHoverCardId(id);
  };

  const handleCardOut = () => {
    setHoverCardId(0);
  };

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to='/'>
                  <span>Paris</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to='/'>
                  <span>Cologne</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to='/'>
                  <span>Brussels</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item tabs__item--active" to='/'>
                  <span>Amsterdam</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to='/'>
                  <span>Hamburg</span>
                </Link>
              </li>
              <li className="locations__item">
                <Link className="locations__item-link tabs__item" to='/'>
                  <span>Dusseldorf</span>
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesFoundCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref={'#icon-arrow-select'}></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options---opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList handleCardOver={(id: number)=>handleCardOver(id)} handleCardOut={handleCardOut} hoverCardId={hoverCardId} offers={offersMock} />
            </section>
            <div className="cities__right-section">
              <Map city={currentCity} offers={offersMock} hoverCardId={hoverCardId}/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
