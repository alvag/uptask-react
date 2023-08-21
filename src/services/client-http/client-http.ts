import axios, { AxiosError, AxiosResponse } from 'axios';
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

    post<T>( path: string, body: HttpRequestParams ) {
        return this.handleRequest<T>( axios.post<T>( `${ this.apiUrl }/${ path }`, body ) );
    }

    get<T>( path: string, params?: HttpRequestParams ) {
        return this.handleRequest<T>( axios.get<T>( `${ this.apiUrl }/${ path }`, { params } ) );
    }

    private async handleRequest<T>( axiosPromise: Promise<AxiosResponse<T>> ) {
        return axiosPromise
            .then( res => res.data )
            .catch( this.handleError );
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
