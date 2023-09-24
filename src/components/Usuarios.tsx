import { User } from '../interfaces'
import { useUsers } from '../hooks'

export const Usuarios = () => {


    const { users,nextPage, previousPage, page } = useUsers()
    

    const renderItem = ( { id, avatar, first_name, email }:User ) => {
        return (
            <tr key={ id.toString() }>
                <td>
                    <img 
                        src={ avatar }
                        alt={ first_name }
                        className="img-thumbnail rounded-circle"
                        width={65}
                        height={65}
                    />
                </td>
                <td>{ email }</td>
                <td>{ first_name }</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios <small>página: { page }</small></h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map( user => (
                            renderItem( user )
                        ))
                    }

                </tbody>
            </table>
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <button 
                            onClick={ previousPage }
                            className="page-link"
                        >
                            Anterior
                        </button>
                    </li>
                    <li className="page-item">
                        <button 
                            className="page-link"
                            onClick={ nextPage }
                        >
                            Siguiente
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}
