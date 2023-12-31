import { styles } from "../styles";
import myphoto from '/editedphoto.png';
import {useEffect} from "react";
import gsap from "gsap";

const Hero = () => {

    useEffect(() => {
        gsap.fromTo(
            ".hero-text",
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.5,
            }
        );

        gsap.fromTo(
            ".img",
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.5,
            }
        );
    }, []);

  return (
        <section className="relative w-full mx-auto">
            <div className={`relative inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} lg:flex flex-row grid items-start gap-5`}>
                <div className="flex gap-8">
                    <div className='flex flex-col justify-center items-center mt-5'>
                        <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                        <div className='w-1 sm:h-80 h-40 violet-gradient' />
                    </div>
                    <div className={"hero-text"}>
                        <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915EFF]'>Francis</span></h1>
                        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                            I am a Full-Stack Web Developer
                        </p>
                        <p>From Chittagong, Bangladesh</p>
                    </div>
                </div>
                <div className="md:w-96 md:h-96 w-full mx-auto img">
                    <img className="rounded-xl" src={myphoto} alt={"i"} />
                </div>
            </div>
        </section>
  );
};

export default Hero;
