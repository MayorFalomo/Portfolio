import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export const LocationProvider = ({ children }) => {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
};
