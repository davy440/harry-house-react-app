export const Intro = ({ setQuestions }) => {
    
    return(
        <>
            <p className='text-3xl font-title leading-10 drop-shadow-3l'>
                I am the Sorting Hat! I'm going to assign you to your House. I'll ask you a few questions and based on that you'll be assigned you your house where you'll achieve greatness!'
            </p>
        
            <button
                className='harry__startQuiz btn btn-primary'
                onClick={() => setQuestions(() => true) }
                >
                    Let's Start
            </button>
        </>
    )
}