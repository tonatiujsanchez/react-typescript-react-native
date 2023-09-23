import { useState } from 'react'

export const Contador = () => {

    const [counter, setCounter] = useState(0)
    

    return (
        <>
            <h3>Contador <small>{ counter }</small> </h3>
            <div>
                <button
                    onClick={ ()=> setCounter(counter + 1) } 
                    className="btn btn-primary me-2"
                >
                    +1
                </button>
                <button
                    onClick={ ()=> setCounter(counter - 1) } 
                    className="btn btn-success"
                >
                    -1
                </button>
            </div>
        </>
    )
}
