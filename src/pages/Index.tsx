
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import ContactButton from '@/components/ContactButton';
import RoomCard from '@/components/RoomCard';

const Index = () => {
  const features = [
    {
      icon: <Star className="h-6 w-6 text-homestay-orange" />,
      title: "Exceptional Comfort",
      description: "Experience our carefully designed rooms that blend luxury with homely comfort for a perfect stay."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-homestay-green" />,
      title: "Safe & Secure",
      description: "Your safety is our priority with 24/7 security and contactless check-in options."
    }
  ];

  const testimonials = [
    {
      name: "Ananya Sharma",
      quote: "The most relaxing homestay I've experienced. The attention to detail and warm hospitality made me feel right at home.",
      location: "Bangalore, India"
    },
    {
      name: "Vikram Mehta",
      quote: "A perfect balance of privacy and friendly interaction. The rooms were spotless and the ambiance was serene.",
      location: "Mumbai, India"
    },
    {
      name: "Priya Patel",
      quote: "I extended my stay twice because I couldn't bear to leave! Such a welcoming atmosphere and beautiful surroundings.",
      location: "Delhi, India"
    }
  ];

  // Featured rooms for the preview section
  const featuredRooms = [
    {
      name: "Garden View Suite",
      description: "A peaceful retreat overlooking our lush garden. This spacious room features a comfortable queen bed and a private bathroom.",
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
      name: "Sea Breeze Cottage",
      description: "Perfect for families, our spacious cottage offers two bedrooms with a shared living area. Enjoy morning coffee while watching the sunrise.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      price: 3800,
      capacity: 4,
      beds: 2,
      features: [
        "Two bedrooms",
        "Private patio",
        "Kitchenette",
        "Air conditioning",
        "Free WiFi"
      ]
    }
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" 
            alt="Alana Stay Homestay" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-homestay-cream"></div>
        </div>
        
        <div className="homestay-container relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Alana Stay
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Experience authentic local living with all the comforts you need for a memorable stay in Honnavar.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link to="/rooms">
              <motion.button 
                className="bg-homestay-orange text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-homestay-brown transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Rooms
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                className="bg-white/90 text-homestay-brown px-8 py-3 rounded-full font-medium shadow-lg hover:bg-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
        >
          <ArrowRight className="h-8 w-8 transform rotate-90" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-homestay-cream">
        <div className="homestay-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title text-3xl">Our Cozy Retreat</h2>
              <p className="text-homestay-brown/80 mb-6">
                Nestled in a serene location in Honnavar, India, our homestay offers the perfect blend of local culture and modern comforts. 
                Whether you're here for a weekend getaway or an extended stay, our warm hospitality will make you feel part of our family.
              </p>
              <p className="text-homestay-brown/80 mb-8">
                We've created a space where you can relax, connect with nature, and experience authentic local living - all while enjoying 
                the amenities you need for a comfortable stay.
              </p>
              <Link to="/gallery">
                <motion.button
                  className="flex items-center gap-2 bg-homestay-green text-white px-6 py-3 rounded-full shadow-md hover:bg-homestay-green/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore Our Gallery</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Alana Stay Surroundings" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Room Preview Section */}
      <section className="py-16 bg-homestay-sand/30">
        <div className="homestay-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title text-3xl inline-block">Our Rooms</h2>
            <p className="text-homestay-brown/80 mt-4">
              Experience comfort and tranquility in our thoughtfully designed rooms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredRooms.map((room, index) => (
              <Link to="/rooms" key={index} className="block">
                <RoomCard
                  name={room.name}
                  description={room.description}
                  image={room.image}
                  price={room.price}
                  capacity={room.capacity}
                  beds={room.beds}
                  features={room.features}
                />
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/rooms">
              <motion.button
                className="bg-homestay-green text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-homestay-green/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Rooms
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-homestay-cream">
        <div className="homestay-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title text-3xl inline-block">Why Choose Us</h2>
            <p className="text-homestay-brown/80 mt-4">
              We've designed our homestay experience to give you the perfect balance of comfort, authenticity, and memorable moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-homestay-cream/50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-homestay-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-homestay-brown/70">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-homestay-sand/30">
        <div className="homestay-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="section-title text-3xl inline-block">Guest Experiences</h2>
            <p className="text-homestay-brown/80 mt-4">
              Don't just take our word for it - hear what our guests have to say about their stay with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-3xl shadow-md relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -top-3 left-6 text-4xl text-homestay-orange">"</div>
                <p className="text-homestay-brown/80 italic mb-4 pt-4">
                  {testimonial.quote}
                </p>
                <div className="border-t border-homestay-sand pt-4">
                  <h4 className="font-display font-semibold text-homestay-brown">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-homestay-brown/60">
                    {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactButton phoneNumbers={["8431534435", "94488 19406"]} />
    </PageTransition>
  );
};

export default Index;
