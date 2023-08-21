import { FC } from 'react';
import { useAuth } from '@/hooks';
import { Navigate, Outlet } from 'react-router-dom';

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
                        ? ( <Outlet/> )
                        : <Navigate to="/"/>
            }
        </>
    );
};

export default DashboardLayout;
