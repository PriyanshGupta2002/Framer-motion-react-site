import React,{useState} from 'react'
import {BiUpArrow}from 'react-icons/bi'
import '../styles/components/ScrollToTop.scss'
const ScrollToTop = () => {
    const [visible,setVisible] = useState(false)
    const toggleVisible=()=>{
        const scrolled = document.documentElement.scrollTop;
        if (scrolled>300) {
            setVisible(true)
            return
        }
        setVisible(false)
    }
    const scrollToTop=()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
    window.addEventListener("scroll",toggleVisible)
  return (
    <>
    {visible && <div className='scrollToTop' onClick={scrollToTop}>
        <BiUpArrow/>
    </div> }
    </>
  )
}

export default ScrollToTop