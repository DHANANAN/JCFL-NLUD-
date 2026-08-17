"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
  ...props
}: FadeInProps) {
  const getVariants = () => {
    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: 24 },
          visible: { opacity: 1, y: 0 },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -24 },
          visible: { opacity: 1, y: 0 },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: 24 },
          visible: { opacity: 1, x: 0 },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -24 },
          visible: { opacity: 1, x: 0 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerProps {
  children: ReactNode;
  delayStep?: number;
  className?: string;
}

export function StaggerContainer({
  children,
  delayStep = 0.1,
  className = "",
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delayStep,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
