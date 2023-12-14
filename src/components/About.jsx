import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tilt } from 'react-tilt';
import {useEffect} from "react";
import gsap from "gsap";



const ServiceCard = ({ index, title, icon }) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.service-card-${index}`,
                start: 'top 80%',
            },
        });

        const textl = gsap.timeline({
            scrollTrigger: {
                trigger: '.texts',
                start: 0,
            },
        });

        tl.fromTo(
            `.service-card-${index}`,
            {
                opacity: 0,
                x: -100 ,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: index * 0.2,
            }
        );

        textl.fromTo(
            ".texts",
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.5,
            }
        );
    }, [index, title, icon]);

    return (
        <Tilt className='xs:w-[250px] w-full'>
            <div className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card service-card-${index}`}>
                <div className=' bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
                    <img src={icon} alt={title} className='w-16 h-16 object-contain' />
                    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
                </div>
            </div>
        </Tilt>
    );
};

const About = () => {
  return (
    <div className="lg:mt-72 md:mt-[220px] mt-32">
      <div className="texts">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>

      <p
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] texts'
      >
        I'm a skilled Full Stack Web Developer and expertise in frameworks like NextJS, React, Node.js, Express, Next.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </p>

      <div className='mt-20 flex flex-wrap gap-10 md:justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about");