import React , {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { withRouter } from 'react-router';
import {registroUsuarioAction} from '../redux/usuarioDucks';


const RegistroComponent = (props) => {
const dispatch = useDispatch();
const [name,setName] = useState();
const [email,setEmail] = useState();
const [password,setPassword] = useState();
const [passwordConfirm,setPasswordConfirm] = useState();
const activo = useSelector(store => store.usuario.logueado);
const [error,setError] = useState();

useEffect(() => {
    console.log(activo);
    if(activo){
        props.history.push('/');
    }
}, [activo])





    const registrarUsuario =  (e) => {
        e.preventDefault();

        if(password != passwordConfirm){
            setError('Las contraseñas no coinciden');
            return
        }
        else{
            
            const data = {
                name:name,
                email:email,
                password:password,
                passwordConfirm:passwordConfirm,
            }
    
            dispatch(registroUsuarioAction(data));
        }

        

        

    }




    return (
        <div className="container">
            {error?(error):(<p></p>)}
           <form onSubmit={ (e) => registrarUsuario(e)}>
               <div>
                   <h1>Registrar como usuario</h1>
                    <label>
                        Nombre
                    </label>

                    <input 
                    
                    onChange={(e) => setName(e.target.value)}
                    className="form-control">
                    
                    </input>
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
                    className="form-control">
                    
                    </input>
                    <label>
                        Confirm Password
                    </label>

                    <input 
                    type="password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    className="form-control mb-4">
                    
                    </input>
               </div>
               <button type="submit" className="btn btn-success">Registrar</button>
           </form>
           

            </div>
        
    )
}

export default withRouter(RegistroComponent)
