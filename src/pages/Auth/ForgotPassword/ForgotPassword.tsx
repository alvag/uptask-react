import { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertProps } from '@/components';
import { ApiError } from '@/services/client-http';
import { recoveryPassword } from '@/services';

interface ForgotPasswordProps {}

const ForgotPasswordPage: FC<ForgotPasswordProps> = () => {
    const [ email, setEmail ] = useState( '' );
    const [ alert, setAlert ] = useState<AlertProps | null>( null );

    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        try {
            if ( email.trim() === '' ) {
                return;
            }

            const { message } = await recoveryPassword( email );

            setEmail( '' );
            setAlert( {
                message,
                type: 'success',
            } );
        } catch ( e ) {
            const { message } = e as ApiError;
            setAlert( { message, type: 'error' } );
        }


    };

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera tu acceso y no pierdas tus { ' ' }
                <span className="text-slate-700">proyectos</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg p-10" onSubmit={ handleSubmit }>

                { alert && <Alert { ...alert }/> }

                <div className="my-5">
                    <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                    <input type="email" id="email" placeholder="Email de registro"
                           value={ email }
                           onChange={ e => setEmail( e.target.value ) }
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>

                <button type="submit"
                        className="bg-sky-700 hover:bg-sky-900 mt-5 cursor-pointer w-full py-3 text-white uppercase font-bold rounded transition-colors">
                    Enviar instrucciones
                </button>
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link to="/"
                      className="block text-center my-5 text-slate-500 hover:text-slate-700 uppercase text-sm">
                    Ya tienes una cuenta? Inicia sesión
                </Link>

                <Link to="/register"
                      className="block text-center my-5 text-slate-500 hover:text-slate-700 uppercase text-sm">
                    No tienes una cuenta? Regístrate
                </Link>
            </nav>
        </>
    );
};

export default ForgotPasswordPage;
