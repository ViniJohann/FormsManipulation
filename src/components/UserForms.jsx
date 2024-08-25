/* DESAFIO...
Objetivo:
Desenvolver um formulário de registro de usuário que colete informações básicas como NOME, EMAIL, SENHA e CONFIRMAÇÃO DE SENHA. 
O formulário deve validar os dados inseridos e exibir mensagens de erro apropriadas quando os dados não forem válidos.

Requisitos do Desafio:

Estrutura do formulário:
Campo para nome completo (obrigatório);
Campo para email (obrigatório e deve ser um email válido);
Campo para senha (obrigatório e deve ter no mínimo 8 caracteres);
Campo para confirmar senha (obrigatório e deve ser igual ao campo senha);
Botão de submit.

Validações:
Todos os campos são obrigatórios;
O email dever um formato válido (exemplo: usuario@dominio.com.br);
A senha deve ter no mínimo 8 caracteres;
A confirmação da senha dever ser idêntica a senha.

Comportamento do formulário:
Exibir mensagens de erro abaixo dos campos que não passam nas validações;
Exibir uma mensagem de sucesso ao final do formulário quando todos os dados forem válidos e o formulário submetido. */
import { useState } from "react";

function UserForms(){
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!user.name || !user.email || !user.password || !user.confirmPassword)
            alert('Favor, preencher todas as informações');
        else if(user.password !== user.confirmPassword) {
            alert('Confirmação de Senha invalida');
            setUser({
                name: user.name,
                email: user.email,
                password: '',
                confirmPassword: ''
            }); 
        }
        else if(user.password.length < 8){
            alert('Senha deve ter pelo menos 8 caracteress')
        }
        else if(!validateEmail(user.email)){
            alert('Favor, digitar um email valido');
        }
        else {
            alert('Informações enviadas para o Sistema');
            setUser({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        };
    };

    return (
        <div id="content">
            <form onSubmit={handleSubmit}>
                <label>
                    Nome: 
                    <input type="text" name="name" value={user.name} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Email: 
                    <input type="text" name="email" value={user.email} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Senha: 
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange}
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Esconder" : "Mostrar"}
                    </button>
                </label>
                <br />
                <label>
                    Confirme sua Senha: 
                    <input 
                        type={showConfirmPassword ? "text" : "password"} 
                        name="confirmPassword" 
                        value={user.confirmPassword} 
                        onChange={handleChange}
                    />
                    <button 
                        type="button" 
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? "Esconder" : "Mostrar"}
                    </button>
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default UserForms;