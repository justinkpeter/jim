import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bannerStyles from '@/styles/Banner.module.css';
import marqueeStyles from '@/styles/Marquee.module.css';


const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: "easeInOut",
            // ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
};

const Banner = () => {
    const [playMarquee, setPlayMarquee] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPlayMarquee(true);
        }, 2000);
    }, []);

    return (
        <motion.div className={bannerStyles.banner} variants={banner}>
            <BannerRowTop title={"just"} />
            <BannerRowCenter title={"incredible"} playMarquee={playMarquee} />
            {/*<BannerRowBottom title={"moments"} />*/}
        </motion.div>
    );
};

const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
        className={bannerStyles['row-title']}
        variants={disabled ? null : banner}
        initial='initial'
        animate='animate'>
        {[...title].map((letter, i) => (
            <motion.span
                key={i}
                className={bannerStyles['row-letter']}
                variants={disabled ? null : letterAni}>
                {letter}
            </motion.span>
        ))}
    </motion.span>
);

const BannerRowTop = ({ title }) => {
    return (
        <div className={bannerStyles['banner-row']} >
            <div className={bannerStyles['row-title']}>
                <AnimatedLetters title={title} />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.4,
                }}
                className={bannerStyles['row-col']}>
                <span className={bannerStyles['row-message']}>
                  We are specialised in setting up the foundation of your brand and
                  setting you up for success.
                </span>
            </motion.div>
        </div>
    );
};

const BannerRowBottom = ({ title }) => {
    return (
        <div className={bannerStyles['banner-row center']} >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                // transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
                transition={{ ease: "easeIn", duration: 1, delay: 1 }}
                className={bannerStyles.scroll}>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1.8,
                    }}>
                    scroll
                </motion.span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1.8,
                    }}>
                    down
                </motion.span>
            </motion.div>
            <AnimatedLetters title={title} />
        </div>
    );
};

const BannerRowCenter = ({ title, playMarquee }) => {
    return (
        // <div className={bannerStyles[`banner-row marquee ${playMarquee && "animate"}`]}>
        <div className={bannerStyles[`banner-row marquee ${playMarquee.toString() && "animate"}`] + ' '+ marqueeStyles.marquee}>
            <motion.div
                initial={{ y: 310 }}
                animate={{ y: 0 }}
                transition={{ ease: 'easeInOut', duration: 1 }}
                // className='marquee__inner'>
                className={marqueeStyles['marquee__inner']}>

                {/*<AnimatedLetters title={title} disabled />*/}
                {/*<AnimatedLetters title={title} disabled/>*/}
                {/*<AnimatedLetters title={title} disabled />*/}
                {/*<AnimatedLetters title={title} disabled />*/}
            </motion.div>
        </div>
    );
};

export default Banner;