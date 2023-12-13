import { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';

import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';
import {useNavigation} from "react-router-dom";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/Work",
    },
    {
        title: "About",
        href: "/About",
    },
    {
        title: "Contact",
        href: "/Contact",
    },
]

export default function Index() {

    const pathname= useNavigation();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className="box-border h-full md:p-[100px] p-4 flex flex-col justify-between">
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="flex flex-col md:text-[56px] mx-auto gap-3 mt-[80px]">
                    <div className="text-[#999999] md:text-base text-sm uppercase border-b">
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map( (data, index) => {
                            return <Link
                                key={index}
                                data={{...data, index}}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}>
                            </Link>
                        })
                    }
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    )
}