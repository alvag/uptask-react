import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { confirmAccount } from '@/services';
import { Alert, AlertProps } from '@/components';

interface ConfirmAccountProps {}

const ConfirmAccountPage: FC<ConfirmAccountProps> = () => {
    const [ alert, setAlert ] = useState<AlertProps | null>( null );
    const { token } = useParams();

    useEffect( () => {
        confirmAccount( token! )
            .then( res => {
                console.log( res );
                setAlert( {
                    message: 'Cuenta confirmada correctamente, ya puedes iniciar sesión',
                    type: 'success',
                } );
            } )
            .catch( error => {
                setAlert( { message: error.message, type: 'error' } );
            } );
    }, [ token ] );


    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu cuenta y comienza a crear
                tus { ' ' }
                <span className="text-slate-700">proyectos</span>
            </h1>
            { alert && <Alert { ...alert } /> }


            { alert && alert.type === 'success' && (
                <Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm">
                    Inicia sesión
                </Link>
            ) }

        </>
    );
};

export default ConfirmAccountPage;
