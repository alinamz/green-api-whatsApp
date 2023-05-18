import React from "react";
import { useNavigate, } from "react-router-dom";

function Login({setDataProfile, setLoggedIn}) {

    let navigate = useNavigate();

    const [idInstance, setIdInstance] = React.useState('');
    const [apiTokenInstance, setApiTokenInstance] = React.useState('');


    let dataPersonal = {
        idInstance : idInstance,
        apiTokenInstance: apiTokenInstance,
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setDataProfile(dataPersonal);
        sessionStorage.setItem('idInstance', dataPersonal.idInstance);
        sessionStorage.setItem('apiTokenInstance', dataPersonal.apiTokenInstance);
        setLoggedIn(true);
        navigate('/chats')
    }

    return (
        <div class='login'>
            <form class='login__area' onSubmit={handleSubmit}>
                <div class='login__container'>
                    <p class='login__text'>Введите idInstance</p>
                    <input class='login__input' onChange={(event) => setIdInstance(event.target.value)} />
                </div>

                <div class='login__container'>
                    <p class='login__text'>Введите apiTokenInstance</p>
                    <input class='login__input' onChange={(event) => setApiTokenInstance(event.target.value)} />
                </div>

                <button  type="submit" class='login__btn-submit'>Авторизироваться</button>
            </form>

        </div>
    )
}

export default Login;