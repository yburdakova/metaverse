'use client';
import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

import styles from '@/styles/index.js';
import { slideIn, staggerContainer , textVariant} from '../utils/motion';
import { cover, stamp, reddit, discort, twitter, instagram} from '@/public';
import useWindowSizes from '../hooks/useWindowSizes.js'


const Hero = (staggerContainer:any) => {

    const windowWidth = useWindowSizes().width || 0;
    console.log(windowWidth);
    
    
    return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6` }>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className="flex lg:justify-between justify-center mx-[40px] mt-[100px] xl:flex-row-reverse flex-col">
            <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2}}
                    className="z-20 flex justify-center gap-8 xl:flex-col lg:flex-row mb-14"
                >
                    <Link href='#'>
                        <Image src={reddit} alt='reddit' width={24} height={24}/>
                    </Link>
                    <Link href='#'>
                        <Image src={discort} alt='discort' width={24} height={24} className='inline-block align-middle'/>
                    </Link>
                    <Link href='#'>
                        <Image src={twitter} alt='twitter' width={24} height={24} className='inline-block align-middle'/>
                    </Link>
                    <Link href='#'>
                        <Image src={instagram} alt='instagram' width={24} height={24} className='inline-block align-middle'/>
                    </Link>
                </motion.div>
                <div className='grow'>
                    <div className="relative z-10 flex flex-col items-center justify-center">
                        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
                        Metaverse
                        </motion.h1>
                        <motion.div
                        variants={textVariant(1.2)}
                        className="flex flex-row items-center justify-center"
                        >
                        <h1 className={styles.heroHeading}>Ma</h1>
                        <div className={styles.heroDText} />
                        <h1 className={styles.heroHeading}>Ness</h1>
                        </motion.div>
                    </div>
                </div>
                
            </div>

            <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className="relative w-full md:-mt-[60px] -mt-[28px]"
            >
                <Image
                    src={cover}
                    alt="hero_cover"
                    height={100}
                    className="w-full md:rounded-tl-[140px] rounded-tl-[60px] z-10 relative"
                />

                <a href="#explore">
                <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
                    <Image
                    src={stamp}
                    alt="stamp"
                    width={windowWidth < 780 ? 100 : 155}
                    height={windowWidth < 780 ? 100 : 155}
                    className="object-contain"
                    />
                </div>
                </a>
            </motion.div>
        </motion.div>
    </section>
);
}

export default Hero;