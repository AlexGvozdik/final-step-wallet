import React from 'react';
import { createPortal } from 'react-dom';
// import { motion } from 'framer-motion/dist/framer-motion';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

export default function Backdrop({children}) {
const modalRoot = document.querySelector('#modal-root')
    return (
        createPortal(
             <motion.div
             id="backdrop"
             className={styles.backdrop}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
           >
             {children}
           </motion.div>
          // <div>
          //   {children}
          // </div>
        , modalRoot)
    );
}
