import { createReducer } from '@reduxjs/toolkit';
import { resetMainPage, completeOffersList } from '../store/action';
import { cities } from '../mocks/cities';
import { offers } from '../mocks/offers';

const initialState = {
  defaultCity: cities[0],
  offersListAmsterdam: offers,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetMainPage, (state) => {
      state.defaultCity = cities[0];
    })
    .addCase(completeOffersList, (state) => {
      state.offersListAmsterdam = offers;
    });
});

export {reducer};
