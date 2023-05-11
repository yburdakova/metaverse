'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText, TitleText } from './CustomTexts';

import { exploreWorlds } from '../constants'
import ExploreCard from './ExploreCard';

const Explore = (staggerContainer:any) => {

    const [active, setActive]=useState('world-2')
    
    return (
        <section id='explore' className='px-6 py-12 sm:p-16 xs:p-8'>
            <motion.div
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{once: true, amount: 0.25}}
                className='2xl:max-w-[1280px] w-full mx-auto flex flex-col'
            >
                <TypingText
                    title="| The World"
                    textStyles="text-center"
                />
                <TitleText 
                    title={<>Choose the world you want <br className='hidden md:block'/>to explore</>}
                    textStyles="text-center"
                />
                <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
                    {exploreWorlds.map((world, index) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            index={index}
                            active={active}
                            handleClick={setActive}
                            
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Explore;