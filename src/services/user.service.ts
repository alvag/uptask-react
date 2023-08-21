import { ClientHttp } from '@/services/client-http';
import { User } from '@/interfaces';

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

interface ProfileResponse {
    token: string;
    user: User;
}

export const getProfile = () => {
    return http.get<ProfileResponse>( `${ path }/me` );
};
