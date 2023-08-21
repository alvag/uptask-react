import { FC, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, AlertProps } from '@/components';
import { registerUser } from '@/services';
import { ApiError } from '@/services/client-http';

interface RegisterProps {}

const RegisterPage: FC<RegisterProps> = () => {

    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ alert, setAlert ] = useState<AlertProps | null>( null );


    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        try {
            if ( [ name, email, password, confirmPassword ].includes( '' ) ) {
                setAlert( { message: 'Todos los campos son obligatorios', type: 'error' } );
                return;
            }

            if ( password !== confirmPassword ) {
                setAlert( { message: 'Las contraseñas no coinciden', type: 'error' } );
                return;
            }

            setAlert( null );

            const data = {
                name,
                email,
                password,
            };

            await registerUser( data );
            setAlert( {
                message: 'Usuario creado correctamente, revisa tu email para confirmar tu cuenta',
                type: 'success',
            } );
            setName( '' );
            setEmail( '' );
            setPassword( '' );
            setConfirmPassword( '' );
        } catch ( e ) {
            const { message } = e as ApiError;
            setAlert( { message, type: 'error' } );
        }
    };

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Crea tu cuenta y administra tus { ' ' }
                <span className="text-slate-700">proyectos</span>
            </h1>

            { alert && <Alert { ...alert }/> }

            <form className="my-10 bg-white shadow rounded-lg p-10" onSubmit={ handleSubmit }>

                <div className="my-5">
                    <label htmlFor="name" className="uppercase text-gray-600 block text-xl font-bold">Nombre</label>
                    <input type="text" id="name" placeholder="Tu nombre completo"
                           value={ name }
                           onChange={ e => setName( e.target.value ) }
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>

                <div className="my-5">
                    <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                    <input type="email" id="email" placeholder="Email de registro"
                           value={ email }
                           onChange={ e => setEmail( e.target.value ) }
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>

                <div className="my-5">
                    <label htmlFor="password"
                           className="uppercase text-gray-600 block text-xl font-bold">Password</label>
                    <input type="password" id="password" placeholder="Password"
                           value={ password }
                           onChange={ e => setPassword( e.target.value ) }
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>

                <div className="my-5">
                    <label htmlFor="confirm_password"
                           className="uppercase text-gray-600 block text-xl font-bold">Confirmar Password</label>
                    <input type="password" id="confirm_password" placeholder="Confirmar Password"
                           value={ confirmPassword }
                           onChange={ e => setConfirmPassword( e.target.value ) }
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>

                <button type="submit"
                        className="bg-sky-700 hover:bg-sky-900 mt-5 cursor-pointer w-full py-3 text-white uppercase font-bold rounded transition-colors">
                    Crear cuenta
                </button>
            </form>

            <nav className="lg:flex lg:justify-between">
                <Link to="/"
                      className="block text-center my-5 text-slate-500 hover:text-slate-700 uppercase text-sm">
                    Ya tienes una cuenta? Inicia sesión
                </Link>

                <Link to="/forgot-password"
                      className="block text-center my-5 text-slate-500 hover:text-slate-700 uppercase text-sm">
                    Olvidé mi password
                </Link>
            </nav>
        </>
    );
};

export default RegisterPage;
