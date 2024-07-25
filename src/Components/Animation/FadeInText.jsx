import React from "react";
import { AnimatePresence, motion } from "framer-motion";

// interface Props {
//   children: React.ReactNode;
//   style?: string;
//   inView?: boolean;
// }

const FadeInText = ({ children, styles, inView }) => {
  return (
    <AnimatePresence>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1.5,
        }}
        style={{ lineHeight: `${styles}px` }}
      >
        {children}
      </motion.p>
    </AnimatePresence>
  );
};

export default FadeInText;
