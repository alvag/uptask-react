import { FC, FormEvent, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Alert, AlertProps } from '@/components';
import { ApiError } from '@/services/client-http';
import { resetPassword } from '@/services';

interface ChangePasswordProps {}

const ChangePasswordPage: FC<ChangePasswordProps> = () => {
    const [ alert, setAlert ] = useState<AlertProps | null>( null );
    const [ password, setPassword ] = useState( '' );
    const { token } = useParams();

    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        try {
            if ( password.trim() === '' ) {
                return;
            }

            const { message } = await resetPassword( token!, password );
            setPassword( '' );
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
            <h1 className="text-sky-600 font-black text-6xl capitalize">Restablece tu password y no pierdas
                acceso { ' ' }
                <span className="text-slate-700">proyectos</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg p-10" onSubmit={ handleSubmit }>

                { alert && <Alert { ...alert }/> }

                <div className="my-5">
                    <label htmlFor="password"
                           className="uppercase text-gray-600 block text-xl font-bold">Nuevo Password</label>
                    <input type="password" id="password" placeholder="Nuevo Password"
                           value={ password }
                           onChange={ e => setPassword( e.target.value ) }
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>


                <button type="submit"
                        className="bg-sky-700 hover:bg-sky-900 mt-5 cursor-pointer w-full py-3 text-white uppercase font-bold rounded transition-colors">
                    Restablecer password
                </button>

                { alert && alert.type === 'success' && (
                    <Link to="/" className="block text-center my-5 text-slate-500 uppercase text-sm">
                        Inicia sesión
                    </Link>
                ) }
            </form>
        </>
    );
};

export default ChangePasswordPage;
