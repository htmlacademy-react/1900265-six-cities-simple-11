import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('offer/changeCity', (cityId: number) => ({
  payload: {
    cityId,
  },
}));

export const completeOffers = createAction('offer/completeOffers');

export const hoverCard = createAction<{id: number}>('offer/hoverCard');
