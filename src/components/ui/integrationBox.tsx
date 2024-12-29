"use client";

import { JSX, useCallback, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  AiderLogo,
  PerplexityLogo,
  SupermavenLogo,
  Mem0Logo,
  ContinueLogo,
} from "./icon";

interface IntegrationItemProps {
  margin: string;
  label: string;
  product: string | JSX.Element;
  Icon: React.FC<React.ComponentProps<"svg">>;
}

const IntegrationItem = ({
  margin,
  label,
  product,
  Icon,
}: IntegrationItemProps) => (
  <motion.div
    className={`bg-white-50 dark:bg-gray-800 ${margin} w-fit rounded-lg border border-gray-200 px-3 py-2 dark:border-black/50`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="flex items-center gap-2">
      <Icon className="h-8 w-8" />
      <div className="flex flex-col text-xs">
        <span className="text-gray-400 dark:text-gray-500">{label}</span>
        <span className="dark:text-white font-medium text-black/60">
          {product}
          <sup>*</sup>
        </span>
      </div>
    </div>
  </motion.div>
);

const INTEGRATIONS = [
  {
    margin: "lg:ml-2 mr-1 dark:bg-neutral-100",
    label: "Ship with",
    product: (
      <a
        href="https://aider.chat/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline dark:text-neutral-900"
      >
        aider
      </a>
    ),
    Icon: AiderLogo,
  },
  {
    margin: "lg:ml-24 ml-2 dark:bg-neutral-100",
    label: "Predict with",
    product: (
      <a
        href="https://supermaven.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline dark:text-neutral-900"
      >
        Supermaven
      </a>
    ),
    Icon: SupermavenLogo,
  },
  {
    margin: "lg:ml-44 dark:bg-neutral-100",
    label: "Remember with",
    product: (
      <a
        href="https://mem0.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline dark:text-neutral-900"
      >
        MemO
      </a>
    ),
    Icon: Mem0Logo,
  },
  {
    margin: "lg:ml-56 -ml-3 dark:bg-neutral-100",
    label: "Search with",
    product: (
      <a
        href="https://www.perplexity.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline dark:text-neutral-900"
      >
        Perplexity
      </a>
    ),
    Icon: PerplexityLogo,
  },
  {
    margin: "lg:ml-48 -mr-5 lg:mr-0 dark:bg-neutral-100",
    label: "Chat & edit with",
    product: (
      <a
        href="https://www.continue.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline dark:text-neutral-900"
      >
        Continue
      </a>
    ),
    Icon: ContinueLogo,
  },
];

const WavyLine = ({ index }: { index: number }) => (
  <motion.path
    d={
      [
        "M39 543C39 377.918 243 364.44 243 173.01V1.50026",
        "M77 543C77 377.918 344 364.44 344 173.01V1.50026",
        "M115 543C115 377.918 450.5 364.44 450.5 173.01C450.5 -18.419 450.5 1.50026 450.5 1.50026",
        "M153 543C153 392 553 410 553 178.898V1.50026",
        "M0.5 543C0.5 377.5 140 394 140 173.01V1.5",
      ][index]
    }
    stroke="currentColor"
    strokeWidth="2"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    transition={{
      duration: 2,
      delay: index * 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);

export default function IntegrationBox() {
  const [isAnimating, setIsAnimating] = useState(false);
  const controls = useAnimation();
  const textControls = useAnimation();

  const animateUpDown = useCallback(async () => {
    while (true) {
      await controls.start({
        y: [0, 20, 0],
        transition: { duration: 4, times: [0, 0.5, 1], ease: "easeInOut" },
      });
      await textControls.start({
        boxShadow: [
          "0 0 0px rgba(59, 130, 246, 0)",
          "0 0 15px rgba(59, 130, 246, 0.7)",
          "0 0 0px rgba(59, 130, 246, 0)",
        ],
        transition: { duration: 1, times: [0, 0.5, 1] },
      });
    }
  }, [controls, textControls]);

  useEffect(() => {
    animateUpDown();
    setIsAnimating(true);
  }, [animateUpDown]);

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.01 },
        delay: i * 0.5,
      },
    }),
  };

  const flowVariants = {
    start: { pathOffset: 0 },
    end: { pathOffset: 1 },
  };

  const flowTransition = {
    duration: 5,
    repeat: Infinity,
    ease: "linear",
  };
  return (
    <>
      {/* Large Display */}
      <div className="hidden lg:block">
        {/* Background Wavy Lines */}
        <div className="absolute right-24 top-14 scale-y-105">
          <svg
            width="554"
            height="543"
            viewBox="0 0 554 543"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <WavyLine key={index} index={index} />
            ))}
          </svg>
        </div>

        {/* Integration Cards */}
        <div className="absolute right-56 top-24 flex flex-col gap-10">
          {INTEGRATIONS.map((integration, index) => (
            <IntegrationItem key={index} {...integration} />
          ))}

          {/* Bottom Card */}
          <motion.div
            className={`-ml-[80px] mt-16 w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-neutral-100`}
            animate={{
              boxShadow: [
                "0 0 0 rgba(45, 212, 191, 0)",
                "0 0 20px rgba(45, 212, 191, 0.8)",
                "0 0 0 rgba(45, 212, 191, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="flex items-center gap-2">
              <motion.div
                className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-700 text-xs font-bold text-white shadow-[0_0_12px_1px] shadow-primary-700/50"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(45, 212, 191, 0)",
                    "0 0 20px rgba(45, 212, 191, 0.8)",
                    "0 0 0 rgba(45, 212, 191, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                V1
              </motion.div>
              <div className="flex flex-col text-xs">
                <span className="text-gray-500 dark:text-gray-400">
                  1/12 Launch
                </span>
                <span className="dark:text-neutral-900 font-medium text-black/60">
                  More coming soon
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="block w-full lg:hidden">
        <div className="relative mx-auto max-w-sm">
          {/* Mobile Background Lines */}
          <motion.div
            className="absolute inset-0 flex scale-110 items-center justify-center"
            animate={controls}
          >
            <svg
              width="316"
              height="321"
              viewBox="0 0 316 321"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[
                "M127.208 321C127.208 236.786 79.3099 185.45 79.3099 87.7948V0.301532",
                "M156.099 321C156.099 236.786 156.099 185.45 156.099 87.7948V0.301532",
                "M184.99 321C184.99 236.786 237.07 185.45 237.07 87.7948C237.07 -9.85997 237.07 0.301532 237.07 0.301532",
                "M213.881 321C213.881 243.969 315 208.692 315 90.7985V0.301532",
                "M97.937 321C97.937 236.573 1 200.529 1 87.7947V0.301398",
              ].map((path, index) => (
                <motion.path
                  key={index}
                  d={path}
                  stroke="url(#mobile_gradient)"
                  strokeWidth="2"
                  variants={pathVariants}
                  initial="hidden"
                  animate={isAnimating ? "visible" : "hidden"}
                  custom={index}
                />
              ))}
              {[
                "M127.208 321C127.208 236.786 79.3099 185.45 79.3099 87.7948V0.301532",
                "M156.099 321C156.099 236.786 156.099 185.45 156.099 87.7948V0.301532",
                "M184.99 321C184.99 236.786 237.07 185.45 237.07 87.7948C237.07 -9.85997 237.07 0.301532 237.07 0.301532",
                "M213.881 321C213.881 243.969 315 208.692 315 90.7985V0.301532",
                "M97.937 321C97.937 236.573 1 200.529 1 87.7947V0.301398",
              ].map((path, index) => (
                <motion.path
                  key={`flow-${index}`}
                  d={path}
                  stroke="url(#flow_gradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill=""
                  variants={flowVariants}
                  initial="start"
                  animate="end"
                  transition={{
                    ...flowTransition,
                    delay: index * 0.2,
                  }}
                />
              ))}
              <defs>
                <radialGradient
                  id="mobile_gradient"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(166.5 178) rotate(-90.1464) scale(195.73 269.231)"
                >
                  <stop stopColor="currentColor" stopOpacity="0.2" />
                  <stop
                    offset="0.893735"
                    stopColor="currentColor"
                    stopOpacity="0"
                  />
                </radialGradient>
                <linearGradient
                  id="flow_gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(45, 212, 191, 0)" />
                  <stop offset="50%" stopColor="rgba(45, 212, 191, 0.5)" />
                  <stop offset="100%" stopColor="rgba(45, 212, 191, 0)" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Mobile Integration Cards */}
          <div className="relative flex -translate-y-2 scale-90 flex-col gap-8">
            <div className="flex justify-center">
              <IntegrationItem {...INTEGRATIONS[0]} />
            </div>
            <div className="flex justify-between">
              <IntegrationItem {...INTEGRATIONS[1]} />
              <IntegrationItem {...INTEGRATIONS[2]} />
            </div>
            <div className="flex justify-between">
              <IntegrationItem {...INTEGRATIONS[3]} />
              <IntegrationItem {...INTEGRATIONS[4]} />
            </div>
          </div>

          {/* Bottom Card */}
          <div className="mt-20 flex w-full translate-y-2 justify-center">
            <motion.div
              className="w-fit rounded-lg border border-gray-200 bg-white-50 px-3 py-2 dark:border-black/50 dark:bg-neutral-100"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(45, 212, 191, 0)",
                  "0 0 20px rgba(45, 212, 191, 0.8)",
                  "0 0 0 rgba(45, 212, 191, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary-700 text-xs font-bold text-white shadow-[0_0_12px_1px] shadow-primary-700/50"
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(45, 212, 191, 0)",
                      "0 0 20px rgba(45, 212, 191, 0.8)",
                      "0 0 0 rgba(45, 212, 191, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  V1
                </motion.div>
                <div className="flex flex-col text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    1/12 Launch
                  </span>
                  <span className="dark:text-neutral-900 font-medium text-black/60">
                    More coming soon
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
