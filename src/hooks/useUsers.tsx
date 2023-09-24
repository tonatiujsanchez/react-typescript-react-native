import { useState, useRef, useEffect } from 'react';
import { reqresApi } from '../apis';
import { ReqResListResponse, User } from '../interfaces';



export const useUsers = () => {
    
    const [users, setUsers] = useState<User[]>([])
    const pageRef = useRef(1)

    useEffect(() => {
        getUsers()
    }, [])
        

    const getUsers = async() => {

        try {
            const { data } = await reqresApi.get<ReqResListResponse>(`/users`, {
                params: {
                    page: pageRef.current
                }
            })
            if( data.data.length > 0 ){
                setUsers( data.data )
            }else {
                pageRef.current--
                alert('¡No hay más datos!')
            }
        
        } catch (error) {
            console.log('Err =>', error)    
        }
    }

    const nextPage = () => {
        pageRef.current++
        getUsers()
    }
    const previousPage = () => {
        if( pageRef.current === 1 ){ return }
        pageRef.current--
        getUsers()
    }

    return {
        users,
        nextPage,
        previousPage,
        page: pageRef.current
    }

}
