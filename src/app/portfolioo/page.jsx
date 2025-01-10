"use client";
import { motion } from "framer-motion";

const Portfolioo = () =>{
    return (
        <motion.div className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
        Portfolio Page</motion.div>
    )
}

export default Portfolioo;