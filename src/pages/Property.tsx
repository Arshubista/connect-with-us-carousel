import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Property = () => {
  const properties = [
    {
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1491357492920-d2979986a84e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=blake-wheeler-zBHU08hdzhY-unsplash.jpg',
      description: 'Beautiful homes for families and individuals.',
    },
    {
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1565777078232-a10610205e8b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=hidayat-abisena-NnGZeKs4vI8-unsplash.jpg',
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
    {
      category: 'Luxury Villas',
      image: 'https://images.unsplash.com/photo-1505843795480-5cfb3c03f6ff?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=daniel-barnes-PyFzygP2eNg-unsplash.jpg',
      description: 'Premium villas in exotic locations.',
    },
    {
      category: 'Apartments',
      image: 'https://images.unsplash.com/photo-1608249887976-3e564514024f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=pat-whelen-68OkRwuOeyQ-unsplash.jpg',
      description: 'Modern apartments with all amenities.',
    },
    {
      category: 'Farmhouses',
      image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=vita-vilcina-KtOid0FLjqU-unsplash.jpg',
      description: 'Countryside homes surrounded by nature.',
    },
    {
      category: 'Retail Spaces',
      image: 'https://images.unsplash.com/photo-1573167278390-0699fb12be46?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=im3rd-media-eyNDKOHUDSc-unsplash.jpg',
      description: 'Shops and outlets in prime locations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero / Splash Background */}
      <div
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1496252223350-db9ad24b108c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=richard-horne-10Rq0Is7xgE-unsplash.jpg')`,
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" /> */}
        <h1 className="relative text-black text-4xl md:text-5xl font-bold z-10 text-center px-4">
          Discover Our Property Categories
        </h1>
      </div>

      {/* Property Grid */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12 text-estate-dark">
          Explore All Types of Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={property.image}
                alt={property.category}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2 text-estate-dark">
                  {property.category}
                </h3>
                <p className="text-gray-600 text-sm">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Property;
