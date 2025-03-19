import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Property = () => {
  // Sample data for properties
  const properties = [
    {
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1496252223350-db9ad24b108c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=richard-horne-10Rq0Is7xgE-unsplash.jpg',
      description: 'Beautiful homes for families and individuals.',
    },
    {
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1565777078232-a10610205e8b?ixlib=rb-4.0.3q=85&fm=jpg&crop=entropy&cs=srgb&dl=hidayat-abisena-NnGZeKs4vI8-unsplash.jpg',
      description: 'Spaces for businesses and offices.',
    },
    {
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1473876637954-4b493d59fd97?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jason-mavrommatis-zAITDJYV09w-unsplash.jpg',
      description: 'Facilities for manufacturing and production.',
    },
    {
      category: 'Land',
      image: 'https://images.unsplash.com/photo-1622480771645-8fe195084754?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=bill-eccles-9r3WhfQhAX8-unsplash.jpg',
      description: 'Plots of land for development or investment.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20"> {/* Add padding-top to avoid overlap with Navbar */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center mb-8">Property Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={property.image}
                  alt={property.category}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{property.category}</h2>
                  <p className="text-gray-600">{property.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Property;