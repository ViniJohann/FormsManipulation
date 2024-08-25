import { useState } from "react";

function Forms2(){
    const [address, setAddress] = useState({
        street: '',
        city: '',
        postalCode: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target
        setAddress((prevAddress) => ({
            ...prevAddress, 
            [name]: value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if( address.street === '' || address.city === '' || address.postalCode === '' )
            alert(`Favor preencher todas as informações`);
        else
            alert(`Informações enviadas`);
    }

    return (
        <div id="content">
            <form onSubmit={handleSubmit}>
                <label>
                    Rua:
                    <input type="text" name="street" value={address.street} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Cidade: 
                    <input type="text" name="city" value={address.city} onChange={handleChange} />            
                </label>
                <br />
                <label>
                    CEP:   
                    <input type="text" name="postalCode" value={address.postalCode} onChange={handleChange}/>                 
                </label>
                <br />
                <button type="submit">Enviar</button>
                <hr />
            </form>
        </div>
    )
}

export default Forms2