import griffindor from './assets/houses/griffindor.png';
import hufflepuff from './assets/houses/hufflepuff.png';
import ravenclaw from './assets/houses/ravenclaw.png';
import slytherin from './assets/houses/slytherin.png';
import { useSpring, animated } from '@react-spring/web';
import { useEffect } from 'react';

export const YourHouse = ({ house }) => {

    const style = useSpring({
        from: {
            scale: 0.4,
            opacity: 0
        },
        to: {
            scale: 1,
            opacity: 1
        }
    })

    const values = Object.values(house)
    const max = Math.max(...values)
    let yourHouseArr = Object.keys(house).filter(key => house[key] === max)
    let yourHouse = yourHouseArr[0]
    
    // Need to check for a tie
    if (yourHouseArr.length > 1) {
        const rand = Math.floor(Math.random()*100)
        yourHouse = yourHouseArr[rand % yourHouseArr.length]
    }
    

    return(
        <div className='harry__yourHouse w-full'>
            {(() => {
                switch(yourHouse) {
                    case 'G':
                        return(
                            <animated.div className='house mx-auto' style={style}>
                            <img className='harry__yourHouse--image w-full' src={griffindor} alt='Griffindor' />
                            <h2 className='house-title'>Griffindor</h2>
                            </animated.div>
                        )
                    case 'H':
                        return(
                        <animated.div className='house mx-auto' style={style}>
                            <img className='harry__yourHouse--image w-full' src={hufflepuff} alt='Hufflepuff' />
                            <h2 className='house-title'>Hufflepuff</h2>
                        </animated.div>
                        )
                    case 'R':
                        return(
                        <animated.div className='house mx-auto' style={style}>
                            <img className='harry__yourHouse--image w-full' src={ravenclaw} alt='Ravenclaw' />
                            <h2 className='house-title'>Ravenclaw</h2>
                        </animated.div>
                        )
                    case 'S':
                        return(
                        <animated.div className='house mx-auto' style={style}>
                            <img className='harry__yourHouse--image w-full' src={slytherin} alt='Slytherin' />
                            <h2 className='house-title'>Slytherin</h2>
                        </animated.div>
                        )
                    default:
                        return;
                }
        })()}
        
        </div>
    )
}