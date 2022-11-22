import {useRef, MutableRefObject, useEffect, useState} from 'react';
import { Navigate } from 'react-router-dom';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { City } from '../../types/city';
import {Offer as OfferType} from '../../types/offer';
import {PIN_MARKER_DEFAULT, PIN_MARKER_ACTIVE} from '../../const/const';
import { useAppSelector } from '../../hooks';
import { CITIES } from '../../mocks/cities';

function Map(): JSX.Element {
  const hoverCardId = useAppSelector((state) => state.hoverCardId);
  const offers = useAppSelector((state) => state.itemsOffers);
  const cityId = useAppSelector((state) => state.cityId);
  const mapRef: MutableRefObject<null> = useRef(null);
  const [currentCityId, setCurrentCityId] = useState<number>(cityId);
  const city: City | undefined = CITIES.find((cityData) => cityData.id === cityId);

  if(!city) {
    return <Navigate to="/NotFound" />;
  }

  const map = useMap(mapRef, city);

  const defaultIcon = leaflet.icon({
    iconUrl: PIN_MARKER_DEFAULT,
    iconSize: [30, 39],
    iconAnchor: [13, 39],
  });

  const activeIcon = leaflet.icon({
    iconUrl: PIN_MARKER_ACTIVE,
    iconSize: [27, 39],
    iconAnchor: [13, 39],
  });

  useEffect(() => {
    if (map) {
      if(city.id !== currentCityId) {
        map.flyTo([city.points.lat, city.points.lng], city.zoom);
        setCurrentCityId(city.id);
      }

      offers.forEach((offer: OfferType) => {
        leaflet.marker({
          lat: offer.points.lat,
          lng: offer.points.lng,
        }, {
          icon: ((offer.id === hoverCardId) ? activeIcon : defaultIcon)
        }).addTo(map);
      });
    }
  }, [map, offers, hoverCardId, city]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
