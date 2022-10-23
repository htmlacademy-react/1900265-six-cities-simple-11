import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  placesFoundCount: number;
}

function App({placesFoundCount}: AppProps): JSX.Element {
  return (
    <MainPage placesFoundCount={placesFoundCount} />
  );
}

export default App;
