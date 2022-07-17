
import './App.css';
import About from './sections/About';
import Blogs from './sections/Blogs';
import Starter from './sections/Starter';
import Testimonials from './sections/Testimonials';
import Why from './sections/Why';
import Image1 from './assets/blogImage1.jpg'
import Image2 from './assets/blogImage2.jpg'
import Image3 from './assets/blogImage3.jpg'
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

import { motion, useScroll } from "framer-motion";
const dummyTestimonails=[
  {
    id:"t1",
    name:"Priyansh Gupta",
    designation:"Founder & CEO",
    content:"Web Application developer is exactly what out business has been lacing. I have gotten atleast 50 times tha value from web application."
  },
  {
    id:"t2",
    name:"Abhishek Kumar",
    designation:"Founder",
    content:"The best on the net! Software development saved on business. I use software development often. I am really satisfied with my software development."
  },
  {
    id:"t3",
    name:"Kartikeya Tripathi",
    designation:"Co-Founder",
    content:"Logo Design is the next killer app. We have used logo design for last five years.Best product,Ever!.Definitely worth the investment."
  }
]
const dummyBlogs=[
  {
    id:"b1",
    image:Image1,
    title:"Top list of Mistakes to Avoid During MVP development",
    subtitle:"When there appears an idea to create a startup, have to take into account all risks you will face and evaluate them thoughtfully. Also as a rule."
  },
  {
    id:"b2",
    image:Image2,
    title:"A day in the life on an Engineering  Manager",
    subtitle:"During the eight years I spent an engineering manager. I regularly tracked how I spent my time. As a startup engineering manager, I was..."
  },
  {
    id:"b3",
    image:Image3,
    title:"How to Build  a Strong Remote work Culture",
    subtitle:"Priyansh Gupta is the company VP of Talent Operations responsible for matching some of the greatest freelancers with companies who.."
  }
]
function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress }}
    />
    <motion.div initial="hidden" animate="show">
      <ScrollToTop/>
      <Starter/>
      <About/>
      <Why/>
      <Testimonials testimony = {dummyTestimonails}/>
      <Blogs blogs={dummyBlogs}/>
      <Footer/>
    </motion.div>
      </>
  );
}

export default App;
