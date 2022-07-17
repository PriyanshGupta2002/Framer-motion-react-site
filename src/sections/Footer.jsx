import React from 'react'
import BrandName from '../components/BrandName'
import '../styles/sections/Footer.scss'
import {AiFillInstagram, AiFillLinkedin, AiOutlineSend} from 'react-icons/ai'
import { FaFacebookF, FaPhoneAlt, FaTwitter} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'
import Touch from '../components/Touch'
import {motion} from 'framer-motion'
import { useScroll } from '../components/UseScroll'
import {fromUp,fromDown} from '../animations'
const Footer = () => {
    const [element,controls] = useScroll()
    const TOUCH_DETAILS=[
        {
            id:'td1',
            detailName:"Email",
            icon:<MdEmail/>,
            detailContent:"guptapriyansh905@gmail.com"
        },
        {
            id:'td2',
            detailName:"Phone",
            icon:<FaPhoneAlt/>,
            detailContent:"+91 2121212122"
        },
        {
            id:'td3',
            detailName:"Location",
            icon:<ImLocation/>,
            detailContent:"32 Steert One Jaunpur"
        },
    ]
  return (
    <div className="footer-container" ref={element}>
         <div className="container">
            <div className="main-container">
                <motion.div className="news-letter" variants={fromUp} animate={controls} transition={{duration:0.5}}>
                    <BrandName isFooter={true}/>
                    <p>
                        Join our newsletter to get updated with our offers &amp; Discounts.
                    </p>
                    <div className="mail">
                        <input type="email" name="" id="" placeholder='Please Enter Your Email ' />
                        <button>
                            <AiOutlineSend/>
                        </button>
                    </div>
                </motion.div>
                <motion.div className="quick-links" variants={fromDown} animate={controls} transition={{duration:0.5}}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Terms&amp;Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </motion.div>
                <motion.div className="industries" variants={fromUp} animate={controls} transition={{duration:0.5}}>
                    <h3>Industries</h3>
                    <ul>
                        <li><a href="#">Website Development</a></li>
                        <li><a href="#">Mobile App Development</a></li>
                        <li><a href="#">Website Design</a></li>
                        <li><a href="#">Mobile App Design</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Graphic Design</a></li>
                        <li><a href="#">IOS App Development</a></li>
                    </ul>
                </motion.div>
                <motion.div className="touch" id="contact" variants={fromDown} animate={controls} transition={{duration:0.5}}>
                    <h3>Get in Touch</h3>
                    {TOUCH_DETAILS.map((touch)=>{return <Touch key={touch.id} icon={touch.icon} detailName={touch.detailName} detailContent={touch.detailContent} />})}
                </motion.div>
            </div>
            <div className="copyright">
                <div className="copy">
                    <p>Copyright &copy; 2022. All rights Reserved.</p>
                </div>
                <div className="icons">
                    <div className="icon">
                        <a href="https://www.facebook.com/">
                            <FaFacebookF/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/">
                            <AiFillInstagram/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/">
                            <AiFillLinkedin/>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.facebook.com/">
                            <FaTwitter/>
                        </a>
                    </div>

                </div>
            </div>
         </div>
    </div>
  )
}

export default Footer