import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login/login-page';
import OfferPage from '../../pages/offer/offer-page';
import NotFound from '../not-found404/not-found404';
// import PlaceCard from '../../components/place-card/place-card';

type AppProps = {
  placesFoundCount: number;
}

function App({placesFoundCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage placesFoundCount={placesFoundCount} />} />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route path={AppRoute.Property} element={<OfferPage />}>
          <Route path={AppRoute.PropertyId} element={<OfferPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
