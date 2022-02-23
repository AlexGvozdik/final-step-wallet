import React from 'react';
import { createPortal } from 'react-dom';

import styles from './styles.module.css';

export default function Backdrop({children}) {
const modalRoot = document.querySelector('#modal-root')
    return (
        createPortal(
            <div id="backdrop" className={styles.backdrop}>
                {children}
            </div>
        , modalRoot)
    );
}
