import { CITIES } from '../../mocks/cities';
import { changeCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import classNames from 'classnames';

function CitiesList (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCityId = useAppSelector((state) => state.cityId);

  const handleChangeCity = (evt: React.SyntheticEvent, cityId: number) => {
    evt.preventDefault();
    if(cityId !== currentCityId) {
      dispatch(changeCity(cityId));
    }
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          CITIES.map((city) => (
            <li className="locations__item" key={city.id}>
              <a className={classNames('locations__item-link', 'tabs__item', {'tabs__item--active': city.id === currentCityId})} onClick={(evt) => handleChangeCity(evt, city.id)} href="/">
                <span>{city.title}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default CitiesList;
