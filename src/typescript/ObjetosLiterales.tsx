

interface Persona {
    nombre   :string
    edad     :number
    direccion: DireccionPersona
}

interface DireccionPersona {
    pais: string
    No  : number
}

export const ObjetosLiterales = () => {
    
    const persona:Persona  = {
        nombre:'Brandon',
        edad: 30,
        direccion: {
            pais: 'México',
            No: 1024
        }
    }

    return (
        <>
            <h3>ObjetosLiterales</h3>
            <code>
                <pre>
                    { JSON.stringify(persona, null, 4) }
                </pre>
            </code>
        </>
    )
}
