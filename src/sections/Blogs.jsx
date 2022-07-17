import React from 'react'
import Blog from '../components/Blog'
import Button from '../components/Button'
import Title from '../components/Title'
import '../styles/sections/Blogs.scss'
import {textAnimation,cardAnimation} from '../animations'
import { useScroll } from '../components/UseScroll'
import {motion} from 'framer-motion'
const Blogs = ({blogs}) => {
    const [element,controls] = useScroll()
  return (
    <div className='blogs-container' id='blogs' ref={element}>
        <div className="container">
            <motion.div className="title-container" variants={textAnimation} animate={controls} transition={{delay:0.3,duration:"0.2",type:"spring"}}>
                <Title title={`Blogs`} color="pink" lineCenter={true}/>
                <p>Insights and advice from our experts.</p>
            </motion.div>
            <div className="blogs">
                {blogs.map((blog)=>{return <Blog key={blog.id} title={blog.title} subtitle={blog.subtitle} image={blog.image} id={blog.id} variants={cardAnimation} animate={controls}/>})}
            </div>
            <div className="button-container">
                <Button content={`View All`} />
            </div>
        </div>
    </div>

  )
}

export default Blogs