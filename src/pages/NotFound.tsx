
import { ArrowLeft } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-creda-blue mb-4">404</h1>
        <p className="text-2xl font-medium text-gray-800 mb-6">Page not found</p>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center text-creda-blue hover:text-creda-blue-light transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
