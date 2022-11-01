import { Offers } from '../types/offer';

export const offers: Offers = [
  {
    id: 1,
    premium: true,
    image: {
      src: 'img/apartment-01.jpg'
    },
    propertyName: 'Beautiful &amp; luxurious studio at great location',
    ratingStars: 4,
    propertyType: 'Apartment',
    cost: 120,
  },
  {
    id: 2,
    premium: false,
    image: {
      src: 'img/room.jpg'
    },
    propertyName: 'Wood and stone place',
    ratingStars: 4,
    propertyType: 'Private room',
    cost: 80,
  },
  {
    id: 3,
    premium: false,
    image: {
      src: 'img/apartment-02.jpg'
    },
    propertyName: 'Canal View Prinsengracht',
    ratingStars: 4,
    propertyType: 'Apartment',
    cost: 132,
  },
  {
    id: 4,
    premium: true,
    image: {
      src: 'img/apartment-03.jpg'
    },
    propertyName: 'Nice, cozy, warm big bed apartment',
    ratingStars: 5,
    propertyType: 'Apartment',
    cost: 180,
  },
  {
    id: 5,
    premium: false,
    image: {
      src: 'img/room.jpg'
    },
    propertyName: 'Wood and stone place',
    ratingStars: 4,
    propertyType: 'Private room',
    cost: 80,
  },
];
