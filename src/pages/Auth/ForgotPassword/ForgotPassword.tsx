import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ForgotPasswordProps {}

const ForgotPasswordPage: FC<ForgotPasswordProps> = () => {
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Recupera tu acceso y no pierdas tus { ' ' }
                <span className="text-slate-700">proyectos</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg p-10">

                <div className="my-5">
                    <label htmlFor="email" className="uppercase text-gray-600 block text-xl font-bold">Email</label>
                    <input type="email" id="email" placeholder="Email de registro"
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
