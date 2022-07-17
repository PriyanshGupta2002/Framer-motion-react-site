import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import '../styles/components/Blog.scss'
import Button from './Button'
import {motion} from 'framer-motion'
const Blog = ({image,title,subtitle,variants,animate}) => {

  return (
    <motion.div className='blog-container' variants={variants} animate={animate} transition={{delay:0.3 , type:"tween", stiffness:"600"} }>
        <div className="image">
            <img src={image} alt="Blog" />
        </div>
        <div className="content">
            <div className="title">
                <h3>{title}</h3>
            </div>
            <div className="subtitle">
                <p>{subtitle}</p>
            </div>
            <Button content={`Read More`} color={`inverse`} icon={<HiOutlineArrowNarrowRight/>}/>
        </div>
    </motion.div>
  )
}

export default Blog