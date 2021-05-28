import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { iniciarSesionUsuarioAction } from '../redux/usuarioDucks';

const Login = (props) => {
const dispatch = useDispatch();
const [email,setEmail] = useState();
const [password,setPassword] = useState();
const activo = useSelector(store => store.usuario.logueado);

useEffect(() => {
    console.log(activo);
    if(activo){
        props.history.push('/');
    }
}, [activo])




const loginUsuario = (e) => {
    e.preventDefault();

    const data = {
        email:email,
        password:password,
        
    }

    dispatch(iniciarSesionUsuarioAction(data));

}


    return (
        <div>
            <form onSubmit={ (e) => loginUsuario(e)}>
               <div>
                   <h1>Iniciar sesión como usuario</h1>
                    <label>
                        Email
                    </label>

                    <input 
                    
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control">
                    
                    </input>
                    <label>
                        Password
                    </label>

                    <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control mb-4">
                    
                    </input>
               </div>
               <button type="submit" className="btn btn-success">Login</button>
           </form>
           
        </div>
    )
}

export default withRouter(Login)
