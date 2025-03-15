
import React from 'react';
import { motion } from 'framer-motion';
import { Bed, Users, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RoomCardProps {
  name: string;
  description: string;
  image: string;
  price: number;
  capacity: number;
  beds: number;
  features: string[];
  className?: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  name,
  description,
  image,
  price,
  capacity,
  beds,
  features,
  className
}) => {
  return (
    <motion.div 
      className={cn(
        "bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        />
        <div className="absolute top-4 right-4 bg-homestay-green text-white text-sm font-medium px-3 py-1 rounded-full">
          ${price}/night
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-homestay-brown mb-2">{name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center text-homestay-green">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">{capacity} Guests</span>
          </div>
          <div className="flex items-center text-homestay-green">
            <Bed className="h-4 w-4 mr-1" />
            <span className="text-sm">{beds} {beds === 1 ? 'Bed' : 'Beds'}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="h-4 w-4 text-homestay-green mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
        
        <motion.button
          className="w-full bg-homestay-sand text-homestay-brown font-medium py-3 rounded-xl hover:bg-homestay-orange hover:text-white transition-colors duration-300 mt-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RoomCard;
