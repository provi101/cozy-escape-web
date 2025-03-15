
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % images.length);
    } else {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateImage('next');
    if (e.key === 'ArrowLeft') navigateImage('prev');
  };

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={galleryVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="image-card aspect-square cursor-pointer"
            variants={imageVariants}
            onClick={() => openLightbox(index)}
            whileHover={{ y: -5 }}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.button
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
              onClick={closeLightbox}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
            
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            
            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.2 }}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>

            <motion.div
              className="relative max-w-4xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
            
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
