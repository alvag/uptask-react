import { FC } from 'react';
import { useAuth } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { Header, Sidebar } from '@/components';

interface DashboardLayoutProps {
}

const DashboardLayout: FC<DashboardLayoutProps> = () => {
    const { isAuth, isLoading } = useAuth().state;

    return (
        <>
            {
                isLoading
                    ? ( <div className="w-full h-screen flex justify-center items-center">Loading...</div> )
                    : isAuth
                        ? (
                            <div className="bg-gray-100">
                                <Header/>

                                <div className="md:flex md:min-h-screen">
                                    <Sidebar/>

                                    <main className="flex-1 p-10">
                                        <Outlet/>
                                    </main>
                                </div>
                            </div>
                        )
                        : <Navigate to="/"/>
            }
        </>
    );
};

export default DashboardLayout;
