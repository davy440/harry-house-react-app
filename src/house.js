import { useState, useEffect } from "react"
import { useTransition, animated } from "@react-spring/web"
import sorterHat from './assets/sorter-hat.jpg'
import { Intro } from "./intro"
import { Questions } from "./questions"

export const House = () => {

    const [questions, setQuestions] = useState(false)

    const [intro, api] = useTransition(questions, () => ({
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        }
    }))

    useEffect(() => {
        console.log(api)
        api.start()
    })
    
    return (
        <animated.div className='harry__house relative h-screen overflow-hidden flex flex-col justify-center items-center'>
            <img
                src={ sorterHat }
                className='absolute w-full object-cover -z-1 h-full left-0 top-0 object-center'
                alt='Sorting Hat'
            />
            <div
            className='harry__questionsWrapper relative h-full flex justify-center items-center text-white w-full align-center overflow-y-auto'>
                {
                intro((style, item) =>
                    item
                    ? <animated.div style={style} className="w-full"><Questions /></animated.div>
                    : <animated.div className='harry__house--intro absolute text-center w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-4' style={style}><Intro setQuestions={ setQuestions } /></animated.div>
                )}
            </div>
        </animated.div>
    )
}