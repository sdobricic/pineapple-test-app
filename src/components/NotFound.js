import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Sorry, this page cannot be found.</h2>
      <p>404</p>
      <Link to='/'>Back to the home page</Link>
    </div>
  );
};

export default NotFound;
