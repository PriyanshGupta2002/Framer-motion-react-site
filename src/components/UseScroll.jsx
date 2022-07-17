import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
export const useScroll=(thres=0.4)=>{
    const controls = useAnimation()
    const [element,view]=useInView({threshold:thres})
    if (view) {
        controls.start("show")
    }
    else{
        controls.start("hidden")
    }
    return[element,controls]
}