import { useState, useEffect, useRef } from "react"

export const Question = ({ order, setOrder, updateHouse }) => {
    
    const [select, onSelect] = useState("")

    const count = useRef(0)

    useEffect(() => {

        return () => {
            onSelect(() => '')
            count.current = 0

        }
    }, [order])
    
    const data = {
        q1: {
            question: "What kind of games do you have in your phone?",
            answer: {
                'a': ['Action Games (PUBG, Fortnite)', 'H'],
                'b': ['Racing games (Car Racing, Mario Kart)', 'S'],
                'c': ['Brain Teasers / Puzzles (Su-do-Ku, Jigsaw)', 'R'],
                'd': ['No games, I prefer playing outdoor sports', 'G']
            }
        },
        q2: {
            question: 'Where do you see yourself in next 10 years',
            answer: {
                'a': ['Relaxing in your house with a happy family', 'G'],
                'b': ['A corporate big-shot having a luxurious lifestyle', 'S'],
                'c': ['Working for yourself as a business-owner', 'H'],
                'd': ['Travelling the world having new experiences', 'R']
            }
        },
        q3: {
            question: 'Imagine you and your friends are planning a trip, which is the most likely place you will like to go to?',
            answer: {
                'a': ['A camping trip', 'G'],
                'b': ['Visit to a historical site / museum', 'R'],
                'c': ['Casino', 'S'],
                'd': ['The Beach', 'H']
            }
        },
        q4: {
            question: 'Imagine you are planning to go on a date. The other person suggests a movie they like very much but you are not sure about it. What is the most likely thing you will do?',
            answer: {
                'a': ['Agree to go to the movie and see how it goes.', 'G'],
                'b': ['Propose another plan instead of a movie.', 'R'],
                'c': ['Go for a movie but suggest a different movie.', 'H'],
                'd': ['Postpone the date for another time.', 'S']
            }
        },
        q5: {
            question: 'You’ve been assigned a task from your work. You have to finish it by today evening. But you need to go somewhere in the day due to something urgent. What would you do?',
            answer: {
                'a': ['Go where you have to go and pull an all-nighter to complete the task.', 'H'],
                'b': ['Go attend the emergency and ask at work if the task can be delayed by a day.', 'G'],
                'c': ['Finish your official work first and then go anywhere else.', 'S'],
                'd': ['Ask a colleague from work if he/she can help you finish the task.', 'R']
            }
        }
    }
    
    const key = `q${order}`
    const {question, answer } = data[key]

    const selectAnswer = ({ house }) => {
        
        count.current += 1
        if (count.current > 1) {
            return
        }

        onSelect(() => house)
        
        updateHouse(prevHouse => {
                prevHouse[house] += 1
                return prevHouse
        })
    }
    
    return (
        <>
            <div className='harry__qa py-8'>
                <h2 className='harry__question text-4xl text-yellow-400'>{question}</h2>
                <div className='harry__answer text-xl'>
                    <ul className='harry__options mb-8'>
                    {Object.keys(answer).map( (item, index) => {
                        const [ans, house] = answer[item]

                        return (
                            <li
                            className={`flex relative before:content-[url(./assets/marker.svg)] before:h-full before:relative leading-0 align-center cursor-pointer focus:bg-black rounded-full p-4 border-2 border-white my-4 last:mb-0 mt-0 ${select === house ? "selected" : ""}`}
                            data-house={house}
                            onClick={(e) => selectAnswer(e.target.dataset)}
                            key={house}>{ans}</li>
                        )
                        
                    })}
                    </ul>
                    
                    {order <= Object.keys(data).length &&
                        <button
                            type='button'
                            className={`btn inline-block ${select ? 'btn-primary' : 'disabled:bg-grey'}`}
                            disabled={!select}
                            onClick={() => setOrder(prevOrder => prevOrder + 1)}>
                            Next
                        </button>
                    }
                </div>
            </div>
        </>
    )
}