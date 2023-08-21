import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout, ChangePassword, ConfirmAccount, ForgotPassword, Login, Register } from '@/pages/Auth';
import { AuthProvider, ProjectsProvider } from '@/context';
import { CreateProject, DashboardLayout, Home, ProjectDetails } from '@/pages/Dashboard';

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ProjectsProvider>
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
                            <Route path="create" element={ <CreateProject/> }/>
                            <Route path=":uid" element={ <ProjectDetails/> }/>
                        </Route>
                    </Routes>
                </ProjectsProvider>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
