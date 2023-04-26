import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap }  from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Swiper from 'swiper';

export const MarqueeSwiper = () => {

    useEffect(() => {
        // Register ScrollTrigger and ScrollSmoother plugins with GSAP
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.refresh();

        // Configure ScrollTrigger
        ScrollTrigger.config({
            autoRefreshEvents: 'visibilitychange, DOMContentLoaded,load, resize'
        });

        // Marquee effect
        const marquee = document.querySelectorAll('.marquee-swiper');


        marquee.forEach((e) => {
            // Create swiper carousel
            const carousel = e.querySelectorAll('.marquee-swiper-carousel');

            carousel.forEach((e) => {
                const items = e.querySelector('.marquee-swiper-items');
                const item = e.querySelectorAll('.marquee-swiper-item');

                e.classList.add('swiper-container');
                items.classList.add('swiper-wrapper');
                item.forEach((e) => e.classList.add('swiper-slide'));

                const slider = new Swiper(e, {
                    slidesPerView: 'auto',
                    loop: true,
                    freeMode: true,
                    freeModeMomentumBounce: false,
                    freeModeMomentumVelocityRatio: 0.3
                });
            });

            // Scroll triggered movement
            const tl = new gsap.timeline();

            tl.set(carousel, { willChange: 'transform' });

            tl.fromTo(
                carousel[0],
                {
                    x: -300
                },
                {
                    x: 0,
                    ease: 'none'
                },
                0
            );

            tl.fromTo(
                carousel[1],
                {
                    x: 300
                },
                {
                    x: 0,
                    ease: 'none'
                },
                0
            );

            tl.set(carousel, { willChange: 'auto' });

            ScrollTrigger.create({
                trigger: e,
                animation: tl,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.3,
                refreshPriority: -14
            });
        });
    }, []);



    return (
        <>
            {/*{!--smooth wrapper --}*/}
            <div id="smooth-wrapper" className={''}>
                {/*// <!-- smooth content -->*/}
                <div id="smooth-content">
                    {/*{!--marquee effect --}*/}
                    <section className={'marquee-swiper'}>
                        <div className={"marquee-swiper-carousel marquee-swiper-carousel-1"}>
                            <div className={"marquee-swiper-items"}>
                                { Array.from(Array(10).keys()).map((item, index) => (
                                    <div key={index} className={'marquee-swiper-item'}
                                         style={{
                                             backgroundImage: 'url(/hero.jpg)',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat'

                                         }}/>
                                ))}
                            </div>
                        </div>
                        <div className="marquee-swiper-carousel marquee-swiper-carousel-2">
                            <div className="marquee-swiper-items">
                                { Array.from(Array(10).keys()).map((item, index) => (
                                    <div key={index} className={'marquee-swiper-item relative group'}>
                                        <div className={'absolute group-hover:scale-125 transition-all ease-in-out duration-700  w-full h-full'}
                                             style={{
                                                 backgroundImage: 'url(/img_2.jpg)',
                                                 backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: 'no-repeat'
                                             }}>
                                        </div>
                                        <div className={'opacity-0 group-hover:opacity-100  bottom-0 h-1/2 transition-all absolute bg-gradient-to-t from-zinc-800 w-full h-full'}/>
                                        <div className={'invisible group-hover:visible absolute bottom-[15%] left-[10%] text-white text-2xl '}>
                                            0{index} Gallery Name - Title
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/*{!--marquee effect end --}*/}
                    <footer>
                        <div>
                            <h2>Credits</h2>
                            <a href="https://www.humming.design" target="_blank">Humming</a>
                            <a href="https://greensock.com" target="_blank">GSAP</a>
                            <a href="https://swiperjs.com" target="_blank">Swiper</a>
                        </div>
                    </footer>
                </div>
                {/*{!--smooth content end --}*/}
            </div>
            {/*{!--smooth wrapper end --}*/}
        </>
    );
};