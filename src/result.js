import { useState } from "react"
import { Button } from "./button"
import { YourHouse } from "./your-house"

export const Result = ({ house }) => {
    
    const [result, getResult] = useState(false)
    const test = () => {
        getResult(true)
    }
    return (
       !result ?
        <div className="harry__results bg-dark">  
            <p className='font-title text-3xl md:text-4xl'>Hmmm... you indeed are interesting. <br/>I think I know where to put you! </p>
            <Button text='And you belong to...' click={test} />
        </div>
        :
        <YourHouse house={ house } />
    )
}