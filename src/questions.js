import { useState, createContext } from "react"
import { useTransition, animated } from "@react-spring/web"
import { Question } from "./question"
import { Result } from "./result"

export const resultContext = createContext()

export const Questions = () => {

    const [order, setOrder] = useState(1)
    const [house, updateHouse] = useState({
        'G': 0,
        'H': 0,
        'R': 0,
        'S': 0
    })

    const questionAnim = useTransition(order, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: {
            tension: 350,
            friction: 5,
            duration: 100
        },
        exitBeforeEnter: true
    })

    return (
        questionAnim((style, item) => (
            item <= 5 
            ? (<animated.div className='harry__questions absolute w-full h-full' style={style}><Question order={item} setOrder={setOrder} updateHouse={updateHouse} /></animated.div>)
            : <animated.div className='harry__resultWrapper flex h-full text-center items-center justify-center' style={style}><Result house={ house } /></animated.div>
        ))
    )
}