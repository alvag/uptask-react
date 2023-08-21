import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks';
import { AuthActions } from '@/context';

export const Header = () => {
    const { dispatch } = useAuth();

    const handleLogout = () => {
        dispatch({
            type: AuthActions.LOGOUT,
        });
    };

    return (
        <header className="px-4 py-5 bg-white border-b">
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl text-sky-600 font-black">UpTask</h2>

                <input type="search" placeholder="Buscar proyecto" className="rounded-lg lg:w-96 block p-2 border"/>

                <div className="flex items-center gap-4">
                    <Link to="/projects" className="font-bold uppercase">Proyectos</Link>

                    <button type="button"
                            onClick={ handleLogout }
                            className="text-white text-sm bg-sky-600 hover:bg-sky-800 p-3 uppercase rounded-md font-bold">
                        Cerrar sesion
                    </button>
                </div>
            </div>
        </header>
    );
};
