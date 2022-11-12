import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { offers } from './mocks/offers';
import {store} from './store';


const Setting = {
  PlacesFoundCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        placesFoundCount = {Setting.PlacesFoundCount}
        offers = {offers}
      />
    </Provider>
  </React.StrictMode>,
);
