import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from 'react-tilt';

const ServiceCard = ({ index, title, icon }) => (

  <Tilt className='xs:w-[250px] w-full'>
    <motion.div 
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
      
      <div options={{max:45, scale: 1, speed: 450}} className=' bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>

      </div>

    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="lg:mt-32 md:mt-[220px] mt-32">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

        I'm a skilled Full Stack Web Developer and expertise in frameworks like NextJS, React, Node.js, Express, Next.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 md:justify-center'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, "about");