"use client";

import StackedCircularFooter from "@/components/footer";
import { LoginForm } from "@/components/main/login";
import { NavBar } from "@/components/navbar";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <div className="text-center space-y-5 max-w-2xl mx-auto mt-20 lg:mt-28 ">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <LoginForm />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <StackedCircularFooter />
          </motion.div>
        </main>
      </div>
    </>
  );
};

export default Page;
