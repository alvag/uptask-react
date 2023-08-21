import { createContext, Dispatch } from 'react';
import { ActionType, initialState, StateType } from './index.ts';

export const ProjectsContext = createContext<{
    state: StateType;
    dispatch: Dispatch<ActionType>;
}>( { state: initialState, dispatch: () => null } );
