import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Magnetic from './MouseEffectcs/Framer.jsx'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useEffect} from "react";

const RoundImages = ({tec, index}) => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: `.round-image-${index}`,
                start: 'top 80%',
            },
        });

        tl.fromTo(
            `.round-image-${index}`,
            {
                opacity: 0,
                x: 100 ,
            },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: index * 0.1,
            }
        );
    }, [index, tec]);

    return (
        <Magnetic>
            <div className={`bg-[#F0ECE5] p-4 rounded-full round-image-${index}`}>
                <img src={tec.icon} alt={"i"} width={50} height={50} />
            </div>
        </Magnetic>
    );

}
const Tech = () => {

  return (
      <div className="justify-center flex">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-10 my-20">
            {
              technologies.map((tec, index) =>
                <RoundImages key={tec.name} index={index} tec={tec} />
              )
            }
          </div>
        </div>
      </div>
  );
};



export default SectionWrapper(Tech, "");
