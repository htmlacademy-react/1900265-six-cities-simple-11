import Header from '../../components/header/header';
import OffersList from '../../components/offers-list/offers-list';
// import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import { useAppDispatch } from '../../hooks';
import { completeOffers } from '../../store/action';
import PlacesFound from '../../components/places-found/places-found';

function MainPage(): JSX.Element {

  const dispatch = useAppDispatch();
  dispatch(completeOffers());

  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesFound />
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
              <OffersList />
            </section>
            <div className="cities__right-section">
              {/* <Map /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainPage;
