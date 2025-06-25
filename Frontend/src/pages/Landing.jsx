const Landing = () => {
  const services =
  
  [
    {
      id: 1,
      title: "Graphic Designer",
      description: "I will design amazing graphics for your business",
      price: "$15.000",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "UI UX Designer",
      description: "I will create stunning UI/UX designs",
      price: "$25.000",
      image: "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "WordPress Developer",
      description: "I will develop your WordPress website",
      price: "$35.000",
      image: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      title: "Digital Marketer",
      description: "I will boost your online presence",
      price: "$20.000",
      image: "https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const categories = [
    {
      title: "Development & IT",
      count: "2,567 Services",
      icon: "💻",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Design & Creative",
      count: "1,389 Services", 
      icon: "🎨",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Sales & Marketing",
      count: "1,090 Services",
      icon: "📈",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Customer Support",
      count: "845 Services",
      icon: "🎧",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Finance & Accounting",
      count: "567 Services",
      icon: "💰",
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Translation",
      count: "432 Services",
      icon: "🌍",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      title: "Writing & Translation",
      count: "890 Services",
      icon: "✍️",
      color: "bg-orange-100 text-orange-600"
    },
    {
      title: "Legal",
      count: "234 Services",
      icon: "⚖️",
      color: "bg-teal-100 text-teal-600"
    },
    {
      title: "Engineering",
      count: "445 Services",
      icon: "🔧",
      color: "bg-rose-100 text-rose-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Get paying clients and top talents at Your Fingertips
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Connect with the best freelancers worldwide and find quality services for your business
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row bg-white rounded-full overflow-hidden shadow-xl">
                <input 
                  type="text" 
                  placeholder="Search for services..."
                  className="flex-1 px-6 py-4 text-gray-900 text-lg focus:outline-none"
                />
                <button className="bg-primary-600 text-white px-8 py-4 font-semibold hover:bg-primary-700 transition-colors sm:rounded-r-full">
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-6">Trusted by</p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            <span className="text-gray-400 font-bold text-lg">✓ Slack</span>
            <span className="text-gray-400 font-bold text-lg">✓ Spotify</span>
            <span className="text-gray-400 font-bold text-lg">✓ Airbnb</span>
            <span className="text-gray-400 font-bold text-lg">✓ Netflix</span>
            <span className="text-gray-400 font-bold text-lg">✓ Zoom</span>
          </div>
        </div>
      </section>

      {/* Latest Services */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Latest Services Available
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map(service => (
              <div key={service.id} className="service-card">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-xl font-bold text-green-600">
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
            Browse By Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="category-card">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl mr-4 ${category.color}`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {category.count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find the best Talent */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
            Find the best Talent for your work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                👤
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Create a Client Account
              </h3>
              <p className="text-gray-600">
                Register as a client to start finding talent
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-secondary-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                📝
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Post a Job
              </h3>
              <p className="text-gray-600">
                Tell us what you need done right now
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl">
                💼
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Hire a Talent for work
              </h3>
              <p className="text-gray-600">
                Browse talent and hire the best fit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                We are here to help
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Monday-Saturday: 9 AM to 6 PM
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">📞</span>
                  <span className="text-lg font-semibold text-gray-900">
                    +91 9876543210
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">💬</span>
                  <span className="text-lg font-semibold text-gray-900">
                    Let&#39;s chat
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Support" 
                className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;