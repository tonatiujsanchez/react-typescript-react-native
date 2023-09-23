

export const TiposBasicos = () => {


    const nombre    :string = 'Ton Dev'
    const edad      :number = 30
    const estaActivo:boolean = true

    const poderes = ['velocidad', 'Volar', 'Respirar en el agua', 'Super Fuerza']
    
    return (
        <>
            <h3>Tipos Básicos</h3>
            <p>{ nombre }</p>
            <p>{ edad }</p>
            <p>{ JSON.stringify( estaActivo ) }</p>
            <br />
            {
                poderes.join(', ')
            }
        </>
    )
}
