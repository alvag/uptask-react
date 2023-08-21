import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, ChangePassword, ConfirmAccount, ForgotPassword, Login, Register } from '@/pages/Auth';
import { AuthProvider } from '@/context';
import { DashboardLayout, Home } from '@/pages/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={ <AuthLayout/> }>
                        <Route index element={ <Login/> }/>
                        <Route path="register" element={ <Register/> }/>
                        <Route path="forgot-password" element={ <ForgotPassword/> }/>
                        <Route path="change-password/:token" element={ <ChangePassword/> }/>
                        <Route path="confirm-account/:token" element={ <ConfirmAccount/> }/>
                    </Route>
                    <Route path="/projects" element={ <DashboardLayout/> }>
                        <Route index element={ <Home/> }/>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
