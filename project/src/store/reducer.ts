import { createReducer } from '@reduxjs/toolkit';
import { changeCity, completeOffers, hoverCard } from '../store/action';
import { offers } from '../mocks/offers';
import { State as StateType} from '../types/state';
import { CITY_ID_DEFAULT } from '../const/const';

const initialState: StateType = {
  itemsOffers: [],
  completed: false,
  cityId: CITY_ID_DEFAULT,
  hoverCardId: 0,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const {cityId} = action.payload;
      state.cityId = cityId;
      state.itemsOffers = offers.filter((offer) => offer.cityId === state.cityId);
    })
    .addCase(completeOffers, (state) => {
      if(!state.completed) {
        state.itemsOffers = offers.filter((offer) => offer.cityId === state.cityId);
      }
    })
    .addCase(hoverCard, (state, action) => {
      const {id} = action.payload;
      state.hoverCardId = id;
    });
});

export {reducer};
