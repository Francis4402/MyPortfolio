import React from 'react'
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export default function Index() {

    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight/2} 100 0`
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight/2} 100 0`

    return (
        <svg className={styles.svgCurve}>
            <motion.path initial="initial" animate="enter" exit="exit"></motion.path>
        </svg>
    )
}
