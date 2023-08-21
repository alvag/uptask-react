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
