import { ClientHttp } from '@/services/client-http';

const path = 'auth';
const http = new ClientHttp();

export const confirmAccount = ( token: string ) => {
    return http.get( `${ path }/confirm/${ token }` );
};

export const recoveryPassword = ( email: string ) => {
    return http.post<{ message: string }>( `${ path }/recovery-password`, { email } );
};

export const resetPassword = ( token: string, password: string ) => {
    return http.post<{ message: string }>( `${ path }/reset-password/${ token }`, { password } );
};
