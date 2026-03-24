export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

export const containerTransition = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const itemTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};
