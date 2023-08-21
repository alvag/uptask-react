import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, ChangePassword, ConfirmAccount, ForgotPassword, Login, Register } from '@/pages/Auth';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <AuthLayout/> }>
                    <Route index element={ <Login/> }/>
                    <Route path="register" element={ <Register/> }/>
                    <Route path="forgot-password" element={ <ForgotPassword/> }/>
                    <Route path="change-password/:token" element={ <ChangePassword/> }/>
                    <Route path="confirm-account/:token" element={ <ConfirmAccount/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
