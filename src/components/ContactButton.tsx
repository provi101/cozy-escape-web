
import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  phoneNumber: string;
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ phoneNumber, className = '' }) => {
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  
  return (
    <motion.a
      href={`tel:${formattedNumber}`}
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
    </motion.a>
  );
};

export default ContactButton;
