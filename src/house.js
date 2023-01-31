import { useState, useEffect } from "react"
import { useTransition, animated } from "@react-spring/web"
import sorterHat from './assets/sorter-hat.jpg'
import { Intro } from "./intro"
import { Questions } from "./questions"

export const House = () => {

    const [questions, setQuestions] = useState(false)

    const [questionsIn, api] = useTransition(setQuestions, () => (
        {
            from: {
                opacity: 0
            },
            enter: {
                opacity: 1
            },
            leave: {
                opacity: 0
            }
    }))

    useEffect(() => {
        api.start()
    }, [])
    
    return questionsIn((style, item) => (
        <animated.div className='harry__house relative h-screen overflow-hidden flex flex-col justify-center items-center' style={style}>
            <img
                src={ sorterHat }
                className='absolute w-full object-cover -z-1 h-full left-0 top-0 object-center'
                alt='Sorting Hat'
            />
            <div
            className='harry__questionsWrapper relative text-white w-full align-center overflow-y-auto'>
            {
                questions
                ? <Questions style={style}/>
                : <Intro setQuestions={ setQuestions } style={style} />
            }
            </div>
        </animated.div>
    ))
}