import { Project } from '@/interfaces';
import { ProjectListItem } from '@/components/ProjectListItem.tsx';

interface ProjectsListProps {
    projects: Project[];
}

export const ProjectsList = ({projects}: ProjectsListProps) => {
    return (
        <>
            {
                projects.map( ( project ) => <ProjectListItem project={ project } key={ project.uid }/> )
            }
        </>
    );
};
