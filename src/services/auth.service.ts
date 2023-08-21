import { ClientHttp } from '@/services/client-http';

const path = 'auth';
const http = new ClientHttp();

export const confirmAccount = ( token: string ) => {
    return http.get( `${ path }/confirm/${ token }` );
};
