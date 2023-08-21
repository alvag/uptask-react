import { createContext, Dispatch } from 'react';
import { ActionType, initialState, StateType } from './index';

export const AuthContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>({state: initialState, dispatch: () => null});
