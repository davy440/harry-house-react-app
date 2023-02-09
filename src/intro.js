import { useTransition, animated } from "@react-spring/web"

export const Intro = ({ questions,  setQuestions }) => {

    const intro = useTransition(questions, {
        from: {
            opacity: 0
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        }
    })
    
    return(
        intro((style, item) => (
            !item && 
            (<animated.div className="harry__introWrapper h-full w-full flex items-center justify-center">
                <div className='harry__house--intro absolute text-center w-11/12 md:w-8/12 lg:w-6/12 mx-auto py-4' style={style}>
                    <p className='text-3xl font-title leading-10 drop-shadow-3l'>
                        I am the Sorting Hat! I'm going to assign you to your House. I'll ask you a few questions and based on that you'll be assigned you your house where you'll achieve greatness!'
                    </p>
                
                    <button
                        className='harry__startQuiz btn btn-primary'
                        onClick={() => setQuestions(() => true) }
                        >
                            Let's Start
                    </button>
                </div>
            </animated.div>)
            )
        )
    )
    
}