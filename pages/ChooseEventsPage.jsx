import { motion } from "framer-motion";

//
import Link from "next/link";
import Head from "next/head";
import React from "react";
import "../styles/ChooseWindow.module.css";

export default function ChooseBillsPage() {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="w-screen h-screen bg-gray-950 text-white flex justify-center"
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Vox Populi | Events Area Selection</title>
      </Head>
      <div className="w-screen h-screen bg-gray-950 text-white flex justify-center">
        <Link
          href="/EventsPageNational"
          className="national-link w-1/3 h-70vh mt-16 mb-16 mx-4 flex justify-center items-center cursor-pointer border border-white rounded-3xl transition-all hover:border-gray-950 transform rotate-10"
        >
          <p className="text-4xl">National</p>
        </Link>

        <Link
          href="/EventsPageState"
          className="w-1/3 h-70vh mt-16 mb-16 mx-4 flex justify-center items-center cursor-pointer border border-white rounded-3xl transition-all hover:bg-white hover:text-gray-950 hover:border-gray-950 transform -rotate-10"
        >
          <p className="text-4xl">Local</p>
        </Link>
      </div>
    </motion.div>
  );
}
