import { ActionType, initialState, ProjectsActions, StateType } from './index.ts';
import { ReactNode, useReducer } from 'react';
import { ProjectsContext } from '@/context';

const reducer = ( state: StateType, { type, payload }: ActionType ): StateType => {
    switch ( type ) {
        case ProjectsActions.SET_PROJECTS:
            return {
                ...state,
                projects: [ ...state.projects, ...payload ],
            };
        default:
            return state;
    }
};

interface ProjectsProviderProps {
    children: ReactNode | ReactNode[];
}

export const ProjectsProvider = ( { children }: ProjectsProviderProps ) => {
    const [ state, dispatch ] = useReducer( reducer, initialState );

    return (
        <ProjectsContext.Provider value={ { state, dispatch } }>
            { children }
        </ProjectsContext.Provider>
    );
};
