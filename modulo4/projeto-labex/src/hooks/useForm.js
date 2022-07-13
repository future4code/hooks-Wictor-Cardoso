import React, { useState } from "react";


const useForm = (w) => {
    const [form, setForm] = useState(w)

    const onChange = (event) =>{
        const {name, value} = event.target
        setForm({...form,[name]: value})
    }

    const clear = () => {
        setForm(w)
    }

    return {form, onChange, clear}
}

export default useForm
