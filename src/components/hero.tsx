"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import GridIllustration from "./ui/grid-illustration";
import IntegrationBox from "./ui/integrationBox";

import { Button } from "./ui/button";

export default function Hero() {
  const textVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <>
      <section className="relative">
        {/* Background Dots */}
        <div className="absolute inset-0 mx-auto max-w-7xl bg-dot-light-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-dot-dark-black lg:[mask-image:radial-gradient(ellipse_at_left,transparent_20%,black)]"></div>

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          {/* Top Grid Illustration */}
          <div className="absolute inset-0 w-full">
            <GridIllustration />
          </div>

          <div className="relative my-20 flex max-w-6xl flex-col items-center px-6 lg:items-start">
            {/* Title */}
            <motion.div
              className="max-w-64 text-center text-4xl font-bold sm:max-w-[340px] sm:text-6xl lg:text-left"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2,
              }}
            >
              <h1 className="bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text text-transparent dark:from-neutral-50 dark:to-neutral-300 ">
                Build Your Network, Grow Your Career
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              className="my-4 max-w-sm text-center sm:my-6 sm:max-w-md lg:text-left"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.4,
              }}
            >
              <p className="text-base text-black/60 dark:text-gray-500 sm:text-lg">
                Your All-In-One Community, Freelance Marketplace,
                <br />
                And Personal Link Hub
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              className="z-10 rounded-xl p-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              <Button asChild>
                <Link href="/pricing">Download For Free</Link>
              </Button>
            </motion.div>
          </div>

          {/* Bottom Grid Illustration */}
          <div className="absolute bottom-0 left-0 right-0 w-full scale-y-[-1] transform">
            <GridIllustration />
          </div>

          {/* Hero Integrations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <IntegrationBox />
          </motion.div>
        </div>
      </section>
    </>
  );
}
