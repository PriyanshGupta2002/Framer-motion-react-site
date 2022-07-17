import React from 'react'
import '../styles/sections/Testimonials.scss'
import Title from '../components/Title'
import Testimonial from '../components/Testimonial'
import {textAnimation,cardAnimation} from '../animations'
import {motion} from 'framer-motion'
import { useScroll } from '../components/UseScroll'
const Testimonials = ({testimony}) => {
  const [element,controls] = useScroll()
  return (
    <div className='testimonials-container' id='testimonials' ref={element}>
        <div className="container">
            <motion.div className="title-container" animate={controls} variants={textAnimation} transition={{type:"spring",duration:"0.2"}}>
                <Title title={`Testimonials`} lineCenter={true} color={`blue`}/>
            </motion.div>
            <div className="testimonials">
                {testimony.map((test)=>{return <Testimonial key={test.id} id={test.id} content={test.content} name={test.name} designation={test.designation} variants={cardAnimation} animate={controls}/>
                })}
            </div>
        </div>
    </div>

  )
}

export default Testimonials