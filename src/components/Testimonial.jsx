import React from 'react'
import '../styles/components/Testimonial.scss'
import {motion} from 'framer-motion'
const Testimonial = ({name,content,designation,variants,animate}) => {
  return (
    <motion.div className='testimonial-container' variants={variants} animate={animate} transition={{type:"spring",duration:"0.2"}} >
        <div className="quote">
            <span>&#10077;</span>
        </div>
        <div className="content">
            {content}
        </div>
        <div className="author">
            <div className="name">{name}</div>
            <div className="designation">{designation}</div>
        </div>
    </motion.div>
  )
}

export default Testimonial