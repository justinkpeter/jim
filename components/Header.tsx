import React from "react";
import { motion } from "framer-motion";
import styles from '@/styles/Header.module.css';

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeIn",
                duration: 1,
                delay: 0.6,
            }}
            className={styles.header}>
            <div className={styles['header-inner']}>
                <div className={styles['logo']}>jim.</div>
                <nav className={styles['nav']}>
                    <li>
                        <a href='/design'>Design</a>
                    </li>
                    <li>
                        <a href='/strategy'>Strategy</a>
                    </li>
                    <li>
                        <a href='/cases'>Cases</a>
                    </li>
                    <li>
                        <a href='/about'>About</a>
                    </li>
                    <li>
                        <a href='/why'>Why work with us?</a>
                    </li>
                </nav>
                <div className={styles.contact}>
                    <a href='/contact'>Let's work together</a>
                </div>
                <div className={styles['hamburger-menu']}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </motion.div>
    );
};

export default Header;