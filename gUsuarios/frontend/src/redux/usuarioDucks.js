import axios from 'axios';

// constantes
const dataInicial = {
    array:[],
    logueado:false,
}

// types
const USUARIO_REGISTRADO_EXITO = 'USUARIO_REGISTRADO_EXITO';
const USUARIO_REGISTRADO_ERROR = 'USUARIO_REGISTRADO_ERROR';
const USUARIO_CERRAR_SESION_EXITO = 'USUARIO_CERRAR_SESION_EXITO';
const USUARIO_INICIAR_SESION_EXITO = 'USUARIO_INICIAR_SESION_EXITO';
// reducer

export default function usuarioReducers(state=dataInicial, action){
    switch(action.type){
        case USUARIO_REGISTRADO_EXITO:
            return {array:action.payload.array,logueado:true}
            break;
        
        case USUARIO_REGISTRADO_ERROR:
                return {array:state};
                break;
        
        case USUARIO_CERRAR_SESION_EXITO:
                return {array:state,logueado:false};
                break;
        case USUARIO_INICIAR_SESION_EXITO:
                return {array:state,logueado:true};
                break;

        default:
            return state
    }
}

// actions

export const registroUsuarioAction = (data) => async(dispatch) => {
    
    if(localStorage.getItem('token')){
        
        dispatch({
            type:USUARIO_REGISTRADO_EXITO,
            payload: {
                array: JSON.parse(localStorage.getItem('token'))
            }
            // payload: JSON.parse(localStorage.getItem())
        })
    }
    else{

        try {
            
            const res = await axios.post(`http://localhost:8000/api/register`,data)
            localStorage.setItem('token', JSON.stringify({
    
                token:res.data
    
            }));
            dispatch({
                type:USUARIO_REGISTRADO_EXITO,
                payload: {
                    array:res.data,
                }
            })
            
    
            // Guardo el token
    
            
    
        } catch (error) {
            alert("Error");
        }
    }


    }
export const cerrarSesionUsuarioAction = () =>  (dispatch) => {
    
    localStorage.removeItem('token');
    dispatch({
        type:USUARIO_CERRAR_SESION_EXITO,
    })


}

export const iniciarSesionUsuarioAction = (data) => async(dispatch) => {
    console.log(data);


    try {
            
        const res = await axios.post(`http://localhost:8000/api/login`,data)
        console.log(res);
        localStorage.setItem('token', JSON.stringify({

            token:res.data

        }));
        dispatch({
            type:USUARIO_INICIAR_SESION_EXITO,
            payload: {
                array:res.data,
            }
        })
        

        // Guardo el token

        

    } catch (error) {
        alert("Error");
    }

}