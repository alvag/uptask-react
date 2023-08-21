import axios, { AxiosError } from 'axios';
import { API_URL } from '@/constants';

export interface ApiError {
    message: string;
    status: number;
}

/* eslint-disable */
export interface HttpRequestParams {
    [key: string]: any;
}

export class ClientHttp {
    private readonly apiUrl = API_URL;

    async post<T>( path: string, body: HttpRequestParams ) {
        return axios.post<T>( `${ this.apiUrl }/${ path }`, body )
            .then( res => res.data )
            .catch( this.handleError);
    }

    private handleError( error: AxiosError<ApiError> ) {
        const { message, response, status } = error;

        const errorApi = {
            message: response?.data?.message || message,
            status: response?.data?.status || response?.status || status,
        };

        return Promise.reject( errorApi );
    }
}
