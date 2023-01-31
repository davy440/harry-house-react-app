import { useState, createContext } from "react"
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

    return (
        order <= 5 ?
        <div className='harry__questions w-11/12 md:w-8/12 lg:w-6/12 mx-auto'>
            <Question order={order} setOrder={setOrder} updateHouse={updateHouse} />
        </div>
        :
        <Result house={ house } />
    )
}