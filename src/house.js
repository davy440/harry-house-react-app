import { useState } from "react"
import sorterHat from './assets/sorter-hat.jpg'
import { Intro } from "./intro"
import { Questions } from "./questions"

export const House = () => {

    const [questions, setQuestions] = useState(false)
    
    return (
        <div className='harry__house relative h-screen overflow-hidden flex flex-col justify-center items-center'>
            <img
                src={ sorterHat }
                className='absolute w-full object-cover -z-1 h-full left-0 top-0 object-center'
                alt='Sorting Hat'
            />
            <div
            className='harry__questionsWrapper relative h-full text-white w-full align-center overflow-y-auto'>
                {questions
                ? <Questions />
                : <Intro questions={ questions } setQuestions={ setQuestions } />}
            </div>
        </div>
    )
}