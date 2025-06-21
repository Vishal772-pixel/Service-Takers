import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            ServiceHub
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Find Talent
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              Find Work
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="btn btn-outline">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 truncate max-w-20">{user.name}</span>
                <button onClick={handleLogout} className="btn btn-outline text-xs px-3 py-2">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="text-gray-600 hover:text-primary-600 font-medium text-sm">
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary text-xs px-3 py-2">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden pb-4">
          <div className="flex justify-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium text-sm transition-colors">
              Find Talent
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium text-sm transition-colors">
              Find Work
            </Link>
            <Link to="/" className="text-gray-600 hover:text-primary-600 font-medium text-sm transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;