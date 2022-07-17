import React from 'react'
import '../styles/components/Card.scss'
import {cardAnimation} from '../animations'
import {motion} from 'framer-motion'
const Card = ({logo,title,animateCoustom}) => {
  return (
    <motion.div className="card" animate={animateCoustom} variants={cardAnimation} transition={{delay:0.2,type:"spring",stiffness:5000}}>
        <div className="logo">
            {logo}
        </div>
        <div className="card-title">
            <h4>{title}</h4>
        </div>
    </motion.div>
  )
}

export default Card