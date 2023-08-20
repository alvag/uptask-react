import { FC } from 'react';

interface ChangePasswordProps {}

const ChangePasswordPage: FC<ChangePasswordProps> = () => {
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Restablece tu password y no pierdas
                acceso { ' ' }
                <span className="text-slate-700">proyectos</span>
            </h1>

            <form className="my-10 bg-white shadow rounded-lg p-10">

                <div className="my-5">
                    <label htmlFor="password"
                           className="uppercase text-gray-600 block text-xl font-bold">Nuevo Password</label>
                    <input type="password" id="password" placeholder="NuevoßPassword"
                           className="w-full mt-3 p-3 border rounded-xl bg-gray-50"/>
                </div>


                <button type="submit"
                        className="bg-sky-700 hover:bg-sky-900 mt-5 cursor-pointer w-full py-3 text-white uppercase font-bold rounded transition-colors">
                    Restablecer password
                </button>
            </form>
        </>
    );
};

export default ChangePasswordPage;
