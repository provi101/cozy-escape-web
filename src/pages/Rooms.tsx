
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import RoomCard from '@/components/RoomCard';
import ContactButton from '@/components/ContactButton';

const Rooms = () => {
  const rooms = [
    {
      name: "Garden View Suite",
      description: "A peaceful retreat overlooking our lush garden. This spacious room features a comfortable queen bed, private bathroom, and a charming sitting area to relax after a day of exploration.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      price: 2500,
      capacity: 2,
      beds: 1,
      features: [
        "Garden view",
        "Private bathroom",
        "Air conditioning",
        "Free WiFi",
        "Breakfast included"
      ]
    },
    {
      name: "Family Cottage",
      description: "Perfect for families, our spacious cottage offers two bedrooms with a shared living area. Enjoy morning coffee on your private patio while watching the sunrise.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      price: 3800,
      capacity: 4,
      beds: 2,
      features: [
        "Two bedrooms",
        "Private patio",
        "Kitchenette",
        "Air conditioning",
        "Free WiFi",
        "Breakfast included"
      ]
    },
    {
      name: "Sea View Room",
      description: "Wake up to stunning Arabian Sea views in this cozy room featuring traditional Konkan decor with modern amenities. The perfect blend of comfort and natural beauty.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      price: 2800,
      capacity: 2,
      beds: 1,
      features: [
        "Sea view",
        "Private bathroom",
        "Air conditioning",
        "Free WiFi",
        "Breakfast included"
      ]
    },
    {
      name: "Deluxe Suite",
      description: "Our most spacious accommodation offering luxury and comfort. Features include a king-size bed, separate living area, and a private balcony with panoramic views of Honnavar.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      price: 4500,
      capacity: 2,
      beds: 1,
      features: [
        "Panoramic views",
        "King-size bed",
        "Separate living area",
        "Private balcony",
        "Air conditioning",
        "Free WiFi",
        "Breakfast included"
      ]
    }
  ];

  return (
    <PageTransition>
      <section className="pt-24 pb-16">
        <div className="homestay-container">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-homestay-brown mb-4">
              Our Comfortable Rooms
            </h1>
            <p className="text-homestay-brown/80">
              Each room is uniquely designed to provide comfort, privacy, and a touch of local charm. 
              Choose the perfect space for your stay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <RoomCard
                key={index}
                name={room.name}
                description={room.description}
                image={room.image}
                price={room.price}
                capacity={room.capacity}
                beds={room.beds}
                features={room.features}
              />
            ))}
          </div>

          <motion.div 
            className="bg-homestay-sand/30 rounded-3xl p-8 mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-display font-semibold text-homestay-brown mb-3">
              Special Group Rates Available
            </h3>
            <p className="text-homestay-brown/80 mb-4">
              Planning a family reunion or friend's getaway? Contact us for special group rates and packages.
            </p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:8431534435"
                className="inline-block bg-homestay-green text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-homestay-green/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call for Group Bookings
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactButton phoneNumbers={["8431534435", "94488 19406"]} />
    </PageTransition>
  );
};

export default Rooms;
