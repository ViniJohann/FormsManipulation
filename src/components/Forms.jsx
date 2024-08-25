import { useState } from "react";

function StdForms(){
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        alert(`Olá ${name}`)
    }

    return (
        <div id="content">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome: 
                    <br />
                    <input type="text" value= {name} onChange={handleChange}/>
                </label>
                <br />
                <button type="submit">Registrar</button>
                <hr />
            </form>
        </div>

    )
}

export default StdForms