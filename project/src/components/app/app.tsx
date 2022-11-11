import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login/login-page';
import OffersPage from '../../pages/offer-page/offer-page';
import NotFound from '../not-found404/not-found404';
import {Offers as OffersType} from '../../types/offer';

type AppProps = {
  placesFoundCount: number;
  offers: OffersType;
}

function App({placesFoundCount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage placesFoundCount={placesFoundCount} offers={offers} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Room} element={<OffersPage offers={offers} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
