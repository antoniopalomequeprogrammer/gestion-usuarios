import React, {useEffect} from 'react'
import { Link,NavLink } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import { Fragment } from 'react';
import { cerrarSesionUsuarioAction, registroUsuarioAction } from '../redux/usuarioDucks';
import { withRouter } from 'react-router';

const Navbar = (props) => {
    
    const logueado = useSelector(store => store.usuario.logueado);
    const dispatch = useDispatch();

    const cerrarSesion = () => {
        
        dispatch(cerrarSesionUsuarioAction())
        props.history.push('/login');
        
    }


    useEffect(() => {
        
        const comprobarUsuario = () => {

            if(localStorage.getItem('token')){
                let token = JSON.parse(localStorage.getItem('token'));
                dispatch(registroUsuarioAction(token));
            }
        }
        comprobarUsuario();


        

       
        
    },[])


    

    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Gestión Usuarios</Link>
            <div className="d-flex">
                {logueado?(
                    <Fragment>

                        <NavLink className="btn btn-dark mr-2" to="/inicio" exact>Inicio</NavLink>
                        <button className="btn btn-dark mr-2" onClick={cerrarSesion}>Cerrar Sesión</button>
                    </Fragment>

                ):(

                    <Fragment>
                        <NavLink className="btn btn-dark mr-2" to="/" exact>Inicio</NavLink>
                        <NavLink className="btn btn-dark mr-2" to="/registro" exact>Registro</NavLink>
                        <NavLink className="btn btn-dark mr-2" to="/login" exact>Login</NavLink>

                    </Fragment>


                )
                
                
                }
            </div>
        </div>
    )
}

export default withRouter(Navbar)
