import { FC } from 'react';
import { Outlet } from 'react-router-dom';

interface AuthLayoutProps {}

const AuthLayout: FC<AuthLayoutProps> = () => {
    return (
        <>
            <main className="container mx-auto mt-5 p-5 md:flex md:justify-center">
                <div className="md:w-2/3 lg:w-1/2">
                    <Outlet/>
                </div>
            </main>
        </>
    );
};

export default AuthLayout;
