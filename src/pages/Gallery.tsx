
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import ImageGallery from '@/components/ImageGallery';
import ContactButton from '@/components/ContactButton';

const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Cozy living room with comfortable furniture"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Mountain landscape view from the homestay"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Serene water view surrounded by trees"
    },
    {
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      alt: "Wildlife near the homestay"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Beautiful flowers in the homestay garden"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Peaceful natural surroundings"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      alt: "Stunning mountain sunset view"
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Comfortable bedroom with natural light"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Colorful garden plants at the homestay"
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
              Our Gallery
            </h1>
            <p className="text-homestay-brown/80">
              Take a visual journey through our homestay and its beautiful surroundings.
              Click on any image to view in full size.
            </p>
          </motion.div>

          <div className="mb-12">
            <ImageGallery images={galleryImages} />
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-display font-semibold text-homestay-brown mb-3">
              Experience It In Person
            </h3>
            <p className="text-homestay-brown/80 mb-6 max-w-xl mx-auto">
              Pictures can only show so much. Come visit us to fully experience the beauty, comfort and warmth of our homestay.
            </p>
            <motion.a
              href="/contact"
              className="inline-block bg-homestay-orange text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-homestay-brown transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Visit
            </motion.a>
          </motion.div>
        </div>
      </section>

      <ContactButton phoneNumber="+1234567890" />
    </PageTransition>
  );
};

export default Gallery;
