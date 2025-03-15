
import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  phoneNumbers: string[];
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ phoneNumbers, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <motion.button
        onClick={toggleOpen}
        className={`fixed bottom-6 right-6 z-40 flex items-center justify-center bg-homestay-green text-white p-4 rounded-full shadow-lg ${className}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 17,
          delay: 0.5
        }}
      >
        <Phone className="h-6 w-6" />
      </motion.button>
      
      {isOpen && (
        <motion.div 
          className="fixed bottom-20 right-6 z-40 bg-white rounded-lg shadow-xl p-2 flex flex-col gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {phoneNumbers.map((number, index) => (
            <motion.a
              key={index}
              href={`tel:${number.replace(/\D/g, '')}`}
              className="bg-homestay-cream hover:bg-homestay-sand px-4 py-2 rounded-lg text-homestay-brown font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4" />
              <span>{number}</span>
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default ContactButton;
