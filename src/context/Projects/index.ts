import { Project } from '@/interfaces';

export enum ProjectsActions {
    SET_PROJECTS = 'SET_PROJECTS',
}

export type ActionType = {
    type: ProjectsActions;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload?: any;
}

export type StateType = {
    projects: Project[];
}

export const initialState: StateType = {
    projects: [],
}
