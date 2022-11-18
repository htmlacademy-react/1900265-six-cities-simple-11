import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction<{cityId: number}>('offer/changeCity');

export const completeOffers = createAction('offer/completeOffers');

export const hoverCard = createAction<{id: number}>('offer/hoverCard');
