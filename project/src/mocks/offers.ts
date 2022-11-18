import { Offers as OffersType } from '../types/offer';

export const offers: OffersType = [
  {
    id: 1,
    cityId: 4,
    premium: true,
    image: 'img/apartment-01.jpg',
    propertyName: 'Beautiful & luxurious studio at great location',
    ratingStars: 4.8,
    propertyType: 'Apartment',
    cost: 120,
    points: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 2,
    cityId: 4,
    premium: false,
    image: 'img/room.jpg',
    propertyName: 'Wood and stone place',
    ratingStars: 4,
    propertyType: 'Private room',
    cost: 80,
    points: {
      lat: 52.3609553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 3,
    cityId: 4,
    premium: false,
    image: 'img/apartment-02.jpg',
    propertyName: 'Canal View Prinsengracht',
    ratingStars: 4,
    propertyType: 'Apartment',
    cost: 132,
    points: {
      lat: 52.3909553943508,
      lng: 4.929309666406198,
    },
  },
  {
    id: 4,
    cityId: 4,
    premium: true,
    image: 'img/apartment-03.jpg',
    propertyName: 'Nice, cozy, warm big bed apartment',
    ratingStars: 5,
    propertyType: 'Apartment',
    cost: 180,
    points: {
      lat: 52.3809553943508,
      lng: 4.939309666406198,
    },
  },
];
