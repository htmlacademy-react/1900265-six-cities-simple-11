import React from 'react';
import { City } from '../../types/city';
import { CITIES } from '../../mocks/cities';
import { useAppSelector } from '../../hooks';

function PlacesFound() {
  const placesFoundCount = useAppSelector((state) => state.itemsOffers.length);
  const currentCityId = useAppSelector((state) => state.cityId);
  const city: City | undefined = CITIES.find((cityData) => cityData.id === currentCityId);

  return (
    <b className="places__found">{ city ? `${placesFoundCount} places to stay in ${city?.title}` : ''}</b>
  );
}

export default PlacesFound;
