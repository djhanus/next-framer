import { motion } from "framer-motion";

export default function Button({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md"
    >
      {children}
    </motion.button>
  );
}
