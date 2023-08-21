import { ActionType, initialState, ProjectsActions, StateType } from './index.ts';
import { ReactNode, useEffect, useReducer } from 'react';
import { ProjectsContext } from '@/context';
import { useAuth } from '@/hooks';
import { getProjects } from '@/services';

const reducer = ( state: StateType, { type, payload }: ActionType ): StateType => {
    switch ( type ) {
        case ProjectsActions.SET_PROJECTS:
            return {
                ...state,
                projects: payload,
            };
        case ProjectsActions.ADD_PROJECT:
            return {
                ...state,
                projects: [ ...state.projects, payload ],
            };
        case ProjectsActions.UPDATE_PROJECT:
            return {
                ...state,
                projects: [ ...state.projects.map( ( project ) => project.uid === payload.uid ? payload : project ) ],
            };
        case ProjectsActions.DELETE_PROJECT:
            return {
                ...state,
                projects: [ ...state.projects.filter( ( project ) => project.uid !== payload ) ],
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
    const { isAuth } = useAuth().state;

    useEffect( () => {
        if ( isAuth ) {
            getProjects()
                .then( ( projects ) => {
                    dispatch( {
                        type: ProjectsActions.SET_PROJECTS,
                        payload: projects,
                    } );
                } )
                .catch( console.log );
        }
    }, [ isAuth ] );


    return (
        <ProjectsContext.Provider value={ { state, dispatch } }>
            { children }
        </ProjectsContext.Provider>
    );
};
