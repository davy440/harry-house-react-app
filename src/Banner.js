import { useEffect } from 'react'
import { useTransition, useSpring, animated } from '@react-spring/web'
import hogwarts from './assets/hogwarts.jpg'

export const Banner = ({setIsShowing}) => {

    // const [bannerIn, api] = useTransition(setIsShowing, () => (
    //     {
    //         from: {
    //             opacity: 0,
    //             x: 100
    //         },
    //         enter: {
    //             opacity: 1,
    //             x: 0
    //         },
    //         leave: {
    //             opacity: 0,
    //             x: -100
    //         }
    // }))

    // useEffect(() => {
    //     api.start()
    // }, [])

    // const textIn = useSpring({
    //     from: {
    //         y: 5,
    //         opacity: 0,
    //         scale: 0.9
    //     },
    //     to: {
    //         y: 0,
    //         opacity: 1,
    //         scale: 1
    //     }
    // })
    
    // return bannerIn((style, item) => (
        return (
        
        <div className="harry__banner absolute h-screen w-screen overflow-hidden flex flex-col justify-center items-center before:absolute before:bg-black/10
        before:w-full before:h-full before:z-10">
            <div className='harry__banner--image'>
                <img
                    src={ hogwarts }
                    className='absolute w-full object-cover -z-1 h-full left-0 top-0 object-top'
                    alt="Welcome to Hogwarts"
                />
            </div>
            <animated.h2
                className='harry__banner--title text-center text-white relative z-20' >
                Welcome to Hogwarts!
            </animated.h2>
            <button
                type='button'
                className='relative z-20 btn btn-primary'
                onClick={() => setIsShowing( () => false)}
                >
                Find your House
            </button>
        </div>
        )
        
}