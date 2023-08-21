import { Project } from '@/interfaces';
import { Link } from 'react-router-dom';

interface ProjectListItemProps {
    project: Project;
}

export const ProjectListItem = ( { project }: ProjectListItemProps ) => {
    const { name, uid, client } = project;

    return (
        <div className="border-b p-5 flex">
            <p className="flex-1">
                { name }

                <span className="text-sm text-gray-500 uppercase">
                    { ' ' } { client }
                </span>
            </p>

            <Link to={ `${ uid }` } className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold">Ver
                proyecto</Link>
        </div>
    );
};
