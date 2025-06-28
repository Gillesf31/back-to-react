import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1>Oops...</h1>
      {isRouteErrorResponse(error) ? (
        <p>{error.status} Invalid page</p>
      ) : (
        <p>Sorry, an unexpected error has occurred.</p>
      )}
    </>
  );
};

export default ErrorPage;
