import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const GetServices = ({ user }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    search: ''
  });
  const navigate = useNavigate();

  const categories = [
    'Development & IT',
    'Design & Creative',
    'Sales & Marketing',
    'Customer Support',
    'Finance & Accounting',
    'Translation',
    'Writing & Translation',
    'Legal',
    'Engineering'
  ];

  ;

  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:8000/getservices');
      
      if (response.data.success) {
        setServices(response.data.services || []);
      }
    } catch (err) {
      setError('Failed to fetch services. Please try again.',);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line
  }, []);

  const handleFilterChange = (e) => {
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
  };

  const filteredServices = services.filter(service => {
    const matchesCategory = !filter.category || service.category === filter.category;
    const matchesMinPrice = !filter.minPrice || service.price >= parseInt(filter.minPrice);
    const matchesMaxPrice = !filter.maxPrice || service.price <= parseInt(filter.maxPrice);
    const matchesSearch = !filter.search || 
      service.title.toLowerCase().includes(filter.search.toLowerCase()) ||
      service.description.toLowerCase().includes(filter.search.toLowerCase());
    
    return matchesCategory && matchesMinPrice && matchesMaxPrice && matchesSearch;
  });

  if (!user || user.role !== 'serviceTaker') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Redirecting...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Available Services
        </h2>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search
              </label>
              <input
                type="text"
                name="search"
                value={filter.search}
                onChange={handleFilterChange}
                placeholder="Search services..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={filter.category}
                onChange={handleFilterChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Min Price ($)
              </label>
              <input
                type="number"
                name="minPrice"
                value={filter.minPrice}
                onChange={handleFilterChange}
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Max Price ($)
              </label>
              <input
                type="number"
                name="maxPrice"
                value={filter.maxPrice}
                onChange={handleFilterChange}
                placeholder="1000"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="text-gray-600">Loading services...</div>
          </div>
        ) : (
          <>
            <div className="mb-6 text-gray-600">
              {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredServices.map(service => (
                <div key={service.id} className="service-card">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 flex-1 mr-2">
                        {service.title}
                      </h3>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                        {service.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <strong className="text-gray-900 text-sm">Features:</strong>
                      <ul className="mt-2 space-y-1">
                        {service.features && service.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center mb-4 text-sm">
                      <div>
                        <div className="text-gray-600">
                          By {service.freelancerName}
                        </div>
                        <div className="text-gray-600">
                          Delivery: {service.deliveryTime} day{service.deliveryTime !== 1 ? 's' : ''}
                        </div>
                      </div>
                      <div className="text-xl font-bold text-green-600">
                        ${service.price}
                      </div>
                    </div>

                    <button 
                      className="w-full btn btn-primary"
                      onClick={() => alert('Contact feature coming soon!')}
                    >
                      Contact Freelancer
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && !loading && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default GetServices;