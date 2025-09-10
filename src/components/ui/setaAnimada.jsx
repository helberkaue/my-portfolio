import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

function SetaAnimada() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.2 }}
    >
      <FaArrowDown size={22} className="text-blue-600" />
    </motion.div>
  );
}

export default SetaAnimada;
