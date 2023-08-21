import { ReactNode, useEffect, useReducer } from 'react';
import { ActionType, AuthActions, initialState, StateType } from './index';
import { AuthContext } from '@/context';
import { getProfile } from '@/services';

const reducer = ( state: StateType, { type, payload }: ActionType ): StateType => {
    switch ( type ) {
        case AuthActions.LOGIN:
            return {
                ...state,
                user: payload.user,
                token: payload.token,
                isAuth: true,
                isLoading: false,
            };
        case AuthActions.LOGOUT:
            return {
                ...initialState,
                isLoading: false,
            };
        case AuthActions.LOADING:
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        default:
            return state;
    }
};

interface AuthProviderProps {
    children: ReactNode | ReactNode[];
}

export const AuthProvider = ( { children }: AuthProviderProps ) => {
    const [ state, dispatch ] = useReducer( reducer, initialState );

    useEffect( () => {
        if ( localStorage.getItem( 'token' ) ) {
            getProfile()
                .then( ( { user, token } ) => {
                    localStorage.setItem( 'token', token );
                    dispatch( {
                        type: AuthActions.LOGIN,
                        payload: { user, token },
                    } );
                } )
                .catch( () => {
                    localStorage.removeItem( 'token' );
                    dispatch( {
                        type: AuthActions.LOGOUT,
                    } );
                } );
        } else {
            dispatch( {
                type: AuthActions.LOGOUT,
            } );
        }
    }, [] );

    return (
        <AuthContext.Provider value={ { state, dispatch } }>
            { children }
        </AuthContext.Provider>
    );
};
