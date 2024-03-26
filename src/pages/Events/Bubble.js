import { motion } from 'framer-motion';

const Bubble = () => {
   
  const size = `${Math.random() * 3 + 2}vmin`;
  const delay = Math.random() * 1;

   
  const startX = `${Math.random() * 100}%`;
  const startY = `${Math.random() * 100}%`;
  const endX = `${Math.random() * 100}%`;
  const endY = `${Math.random() * 100}%`;

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.7)',
        position: 'absolute',
        top: startY, 
        left: startX, 
        zIndex: 0,
      }}
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{
        scale: [1, 1.5, 1],
        opacity: [0.5, 1, 0.5],
        x: [startX, endX],  
        y: [startY, endY],  
      }}
      transition={{
        duration: 3,  
        repeat: Infinity,
        repeatType: "reverse",  
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

export default Bubble;
