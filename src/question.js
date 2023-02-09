import { useState, useEffect, useRef } from "react"
import { useSprings, animated } from "@react-spring/web"

export const Question = ({ order, setOrder, updateHouse }) => {

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

    const qaList = data[`q${order}`]
    const ansKeys = Object.keys(qaList.answer)
    
    const [select, onSelect] = useState("")
    const count = useRef('')
    const [selectAnim, api] = useSprings(ansKeys.length, () => {
        return {
            from: {
                opacity: 0,
                background: 'transparent',
                color: 'white',
                y: -10,
                scale: 0.95
            },
            config: {
                mass: 1,
                tension: 900,
                friction: 1,
                clamp: true
            }
        }
    })

    useEffect(() => {
        api.start((index) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            delay: () => {
                return 100 + (100 * index)
            },
            config: {
                mass: 1,
                tension: 150,
                friction: 15
            }
        }))
        return () => {
            onSelect(() => '')
            count.current = ''
            api.set({
                opacity: 0,
                background: 'transparent',
                color: 'white',
                y: -10,
                scale: 0.95
            })
        }
        // eslint-disable-next-line
    }, [order])
    
    const key = `q${order}`
    const {question } = data[key]

    const selectAnswer = (e, i) => {
        console.log(e)
        api.start((index) => (
            index === i
            ? { background: 'rgba(255,255,255,0.7)', color: 'black' }
            : { background: 'transparent', color: 'white' })
        )

        const { house } = e.currentTarget.dataset
        count.current  = house
        onSelect(() => house)

    }

    const onNext = () => {

        setOrder(prevOrder => prevOrder + 1)

        updateHouse(prevHouse => {
            prevHouse[count.current] += 1
            return prevHouse
        })
    }
    
    return (
        <div class="pt-20 w-11/12 md:w-8/12 lg:w-7/12 mx-auto">
            <div className='harry__qa bg-dark backdrop-blur-sm'>
                <h2 className='harry__question text-3xl md:text-4xl'>{question}</h2>
                <div className='harry__answer text-base md:text-xl'>
                    <ul className='harry__options mb-8'>
                        {
                            selectAnim.map((animation, index) => {
                                const [ ans, house ] = Object.values(qaList.answer)[index]
                                return (
                                    <animated.li
                                    className={`flex items-center relative before:content-[url(./assets/marker.svg)] before:h-full before:ml-4 before:relative align-center cursor-pointer rounded-full border-2 border-white my-4 last:mb-0 mt-0 ${select === house ? "selected" : ""}`}
                                    data-house={house}
                                    style={animation}
                                    onClick={(e) => selectAnswer(e, index)}
                                    key={`${house}${order}`}><span className="my-3 mx-4">{ans}</span></animated.li>
                                )
                            })
                        }
                    </ul>
                    
                    {order <= Object.keys(data).length &&
                        <button
                            type='button'
                            className={`btn inline-block ${select ? 'btn-primary' : 'disabled:bg-grey'}`}
                            disabled={!select}
                            onClick={onNext}>
                            Next
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}