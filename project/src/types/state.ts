import { store } from '../store/store';
import { Offers as OffersType} from './offer';

export type State = {
  itemsOffers: OffersType;
  completed: boolean;
  cityId: number;
  hoverCardId: number;
};

export type AppDispatch = typeof store.dispatch;
