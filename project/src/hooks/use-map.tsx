import { useEffect, useRef, useState, MutableRefObject } from 'react';
import leaflet, { Map as MapType} from 'leaflet';
import { City } from '../types/city';

function useMap(mapRef: MutableRefObject<null>, city: City) {
  const [map, setMap] = useState<MapType | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.points.lat,
          lng: city.points.lng,
        },
        zoom: city.zoom,
      });

      leaflet.tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
