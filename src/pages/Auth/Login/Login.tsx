import { FC, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, AlertProps } from '@/components';
import { ApiError } from '@/services/client-http';
import { login } from '@/services';
import { useAuth } from '@/hooks';
import { AuthActions } from '@/context';

interface LoginProps {}

const LoginPage: FC<LoginProps> = () => {
    const { dispatch } = useAuth();
    const navigate = useNavigate();
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ alert, setAlert ] = useState<AlertProps | null>( null );

    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        try {
            setAlert( null );

            if ( [ email, password ].includes( '' ) ) {
                setAlert( {
                    message: 'Todos los campos son obligatorios',
                    type: 'error',
                } );
            }

            const { token, user } = await login( email, password );
            localStorage.setItem( 'token', token );
            dispatch( {
                type: AuthActions.LOGIN,
                payload: { user, token },
            } );
            navigate( '/projects' );

        } catch ( e ) {
            const { message } = e as ApiError;
            setAlert( {
                message,
                type: 'error',
            } );
        }

    };

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia sesion y administra tus { ' ' }
                <span className="text-slate-700">proyectos</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg p-10" onSubmit={ handleSubmit }>

                { alert && <Alert { ...alert } /> }

                <div className="my-5">
                    <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                    <input type="email" id="email" placeholder="Email de registro"
                           value={ email }
                           onChange={ ( e ) => setEmail( e.target.value ) }
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>

                <div className="my-5">
                    <label htmlFor="password"
                           className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                    <input type="password" id="password" placeholder="Password"
                           value={ password }
                           onChange={ ( e ) => setPassword( e.target.value ) }
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>

                <button type="submit"
                        className="bg-sky-700 hover:bg-sky-900 mt-5 cursor-pointer w-full py-3 text-white uppercase font-bold rounded transition-colors">
                    Iniciar sesion
                </button>
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link to="/register"
                      className="block text-center my-5 text-slate-500 hover:text-slate-700 uppercase text-sm">
                    No tienes una cuenta? Regístrate
                </Link>

                <Link to="/forgot-password"
                      className="block text-center my-5 text-slate-500 hover:text-slate-700 uppercase text-sm">
                    Olvidé mi password
                </Link>
            </nav>
        </>
    );
};

export default LoginPage;
