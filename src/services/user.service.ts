import { ClientHttp } from '@/services/client-http';

const path = 'users';
const http = new ClientHttp();

interface RegisterParams {
    password: string;
    name: string;
    email: string;
}

export const registerUser = (params: RegisterParams) => {
    return http.post(path, params);
}
