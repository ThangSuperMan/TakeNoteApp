import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={useColorModeValue("light", "dark")}
      >
        <Box>
          <IconButton
            onClick={toggleColorMode}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            colorScheme={useColorModeValue("purple", "orange")}
          />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
