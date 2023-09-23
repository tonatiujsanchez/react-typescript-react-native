import { useCounter } from '../hooks'

export const ContadorConHook = () => {

    const { counter, acomular } = useCounter()


    return (
        <>
            <h3>Contador con Hook <small>{ counter }</small> </h3>
            <div>
                <button
                    onClick={ ()=> acomular(1) } 
                    className="btn btn-primary me-2"
                >
                    +1
                </button>
                <button
                    onClick={ ()=> acomular(-1) } 
                    className="btn btn-success"
                >
                    -1
                </button>
            </div>
        </>
    )
}
