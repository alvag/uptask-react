import { User } from '@/interfaces';

export enum AuthActions {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    LOADING = 'LOADING',
}

export type ActionType = {
    type: AuthActions;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

export type StateType = {
    user?: User;
    isAuth?: boolean;
    token?: string;
    isLoading?: boolean;
}

export const initialState: StateType = {
    isLoading: true,
    isAuth: false,
};
