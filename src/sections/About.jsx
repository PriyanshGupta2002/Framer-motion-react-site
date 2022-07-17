import React from 'react'
import Title from '../components/Title'
import '../styles/sections/About.scss'
import Button from '../components/Button'
import Card from '../components/Card'
import {HiLightBulb} from 'react-icons/hi'
import {BsCalendarFill} from 'react-icons/bs'
import {BiSupport} from 'react-icons/bi'
import {SiGooglemessages} from 'react-icons/si'
import {reveal} from '../animations'
import {motion} from 'framer-motion'
import { useScroll } from '../components/UseScroll'
const About = () => {
    const [element,controls] = useScroll()
  return (
    <div className='about-container' id='about' ref={element}>
        <div className="container">
            <motion.div className="details" variants={reveal} animate={controls} transition={{delay:0.2,stiffness:300,type:"spring"}}>
                <Title title="About Cryo" color="blue" />
                <p>
                    We Believe that everyone deserves to have a website or online store.
                    Innovation and simplicity makes us happy. Our mission is to help people acheive what they have passionate about it.
                </p>
                <p>
                    We are excited to simplify SEO for everyone through software, education or community
                </p>
                <Button content="Why cryo?" />
            </motion.div>
            <div className="cards" ref={element}>
                   <Card title="Innovative Ideas"
                   logo={<HiLightBulb/>}
                    animateCoustom={controls} />
                   <Card title="Planning"
                   logo={<BsCalendarFill/>}
                    animateCoustom={controls} />
                   <Card title="Communication"
                   logo={<BiSupport/>}
                    animateCoustom={controls} />
                   <Card title="24 * 7 Support"
                   logo={<SiGooglemessages/>}
                    animateCoustom={controls} />
            </div>
        </div>
    </div>
  )
}

export default About