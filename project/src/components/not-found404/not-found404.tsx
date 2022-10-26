import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <h1>
        404 Page not Found
      </h1>
      <Link to="/">Go to main page</Link>
    </>
  );
}

export default NotFound;
