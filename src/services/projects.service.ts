import { ClientHttp } from '@/services/client-http';
import { Project } from '@/interfaces';

const path = 'projects';
const http = new ClientHttp();

export const getProjects = () => {
    return http.get<Project[]>(path);
};

export const createProject = ( project: Partial<Project> ) => {
    return http.post<Project>( path, project );
};

export const updateProject = ( id: string, project: Partial<Project> ) => {
    return http.patch<Project>( `${ path }/${ id }`, project );
};

export const getProject = ( id: string ) => {
    return http.get<Project>( `${ path }/${ id }` );
};

export const deleteProject = ( id: string ) => {
    return http.delete<Project>( `${ path }/${ id }` );
};
