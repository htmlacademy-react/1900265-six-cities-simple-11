import {useRef, MutableRefObject, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import {Offers as OffersType, Offer as OfferType} from '../../types/offer';
import {PIN_MARKER_DEFAULT, PIN_MARKER_ACTIVE} from '../../const/const';
import useMap from '../../hooks/use-map';

type MapProps = {
  city: City;
  offers: OffersType;
  hoverCardId: number;
}

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

function Map({city, offers, hoverCardId}: MapProps): JSX.Element {
  const mapRef: MutableRefObject<null> = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer: OfferType) => {
        leaflet.marker({
          lat: offer.points.lat,
          lng: offer.points.lng,
        }, {
          icon: ((offer.id === hoverCardId) ? activeIcon : defaultIcon)
        }).addTo(map);
      });
    }
  }, [map, offers, hoverCardId]);

  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
