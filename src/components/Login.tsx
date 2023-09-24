import { useEffect, useReducer } from 'react'

interface AuthState {
    validando:boolean
    token: string | null
    username: string
    nombre: string
}

const initialState:AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = { 
    token:string
    nombre: string 
    username:string
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload }

const authReducer = ( state:AuthState, action:AuthAction  ):AuthState => {

    switch (action.type) {

        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            return {
                validando: false,
                token:action.payload.token,
                nombre: action.payload.nombre,
                username: action.payload.username, 
            }
    
        default:
            return state
    }
}


export const Login = () => {

    const [{ token, validando, nombre }, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            logout()
        }, 1500);

    }, [])


    const logout = () => {
        dispatch({ type: 'logout' })
    }
    
    const login = () => {
        dispatch({ 
            type: 'login', 
            payload: {
                token: '123ABC',
                nombre: 'Brandon',
                username: 'brand17',
            }
        })
    }


    

    if(validando){
        return (
            <div className="alert alert-info">
                Validando...
            </div>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                token ? (
                    <>
                        <div className="alert alert-success">
                            Autenticado como: { nombre }
                        </div>
                        <button
                            onClick={ logout }
                            className="btn btn-danger"
                        >
                            Logout
                        </button>
                    </>
                
                ):(
                    <>
                        <div className="alert alert-danger">
                            No autenticado
                        </div>
                        <button
                            onClick={ login }
                            className="btn btn-primary"
                        >
                            Login
                        </button>
                    </>
                )
            }
        </>
    )
}
