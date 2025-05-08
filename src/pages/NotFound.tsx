
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-launchab-light">
      <div className="container-custom">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-6xl font-bold text-launchab-navy mb-4">404</h1>
          <h2 className="text-2xl font-bold text-launchab-navy mb-6">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
