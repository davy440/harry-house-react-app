import { useState } from "react"
import { Button } from "./button"
import { YourHouse } from "./your-house"

export const Result = ({ house }) => {
    
    const [result, getResult] = useState(false)
    const test = () => {
        getResult(true)
    }
    return (
        <div className='harry__resultWrapper text-center'>
       {
       !result ?
        <>  
            <p className='font-title text-2xl md:text-4xl'>Hmmm... you indeed are interesting. <br/>I think I know where to put you! </p>
            <Button text='And you belong to...' click={test} />
        </>
        :
        <YourHouse house={ house } />
        }
        </div>
    )
}