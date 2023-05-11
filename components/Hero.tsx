'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';

import { slideIn, staggerContainer , textVariant} from '../utils/motion';
import { cover, stamp, reddit, discort, twitter, instagram} from '@/public';
import useWindowSizes from '../hooks/useWindowSizes.js'


const Hero = (staggerContainer:any) => {

    const windowWidth = useWindowSizes().width || 0;
    console.log(windowWidth);
    
    return (
    <section className={`sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6` }>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
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
                        <motion.h1 variants={textVariant(1.1)} className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>
                        Metaverse
                        </motion.h1>
                        <motion.div
                        variants={textVariant(1.2)}
                        className="flex flex-row items-center justify-center"
                        >
                        <h1 className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>Ma</h1>
                        <div className='md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]' />
                        <h1 className='font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white'>Ness</h1>
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