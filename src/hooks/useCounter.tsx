import { useState } from 'react'

export const useCounter = ( initialValue:number = 10 ) => {

    const [counter, setCounter] = useState(initialValue)
    
    const acomular = ( numero:number ) => {
        setCounter(counter + numero)
    }


    return {
        counter,
        acomular
    }
}
