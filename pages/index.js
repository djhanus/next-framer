import { motion } from "framer-motion";
import Button from "../components/Button";
// This is a simple Next.js page that uses Framer Motion for animations

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-gray-800"
      >
        Welcome to Framer-Like Dev
      </motion.h1>
      <Button>Click Me</Button>
      <p>Lorem ipsum dolor</p>
    </main>
  );
}

