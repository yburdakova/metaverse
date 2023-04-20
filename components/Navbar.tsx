'use client';
import Image from "next/image";
import { motion } from 'framer-motion';

import styles from '@/styles/index.js';
import { navVariants } from '../utils/motion';
import { search, menu } from '../public/index.js'


const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className={`${styles.xPaddings} py-8 relative  mx-[40px]`}
        >
            <div className='absolute w=[50%] inset-0 gradient-01'/>
            <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `}>
                <Image src={search} alt="search button" width={24} height={24}/>
                <h2 className="font-extrabold uppercase text-[24px] leading-[30px] text-white">Metaverse</h2>
                <Image src={menu} alt="menu button" width={24} height={24}/>
            </div>
        </motion.nav>
    );
};

export default Navbar;