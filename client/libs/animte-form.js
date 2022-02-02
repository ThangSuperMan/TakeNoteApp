import { motion, AnimatePresence } from "framer-motion";
const AnimateForm = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ y: 20, opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateForm;
