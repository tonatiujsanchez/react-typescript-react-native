import { useState } from "react"



export const useForm = <T extends Record<string, unknown>>(initialValues:T) => {

    const [form, setForm] = useState(initialValues)

    const onChange = ( value:string, name: keyof T ) => {
        setForm({
            ...form,
            [name]: value
        })

    }

    return {
        ...form,
        onChange,
        form
    }
}
