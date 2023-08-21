import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject } from '@/services';
import { Project } from '@/interfaces';
import { Icons } from '@/components';

interface ProjectDetailsProps {}

const ProjectDetails: FC<ProjectDetailsProps> = () => {
    const [ project, setProject ] = useState<Project>();
    const { uid } = useParams();

    useEffect( () => {
        getProject( uid! )
            .then( setProject )
            .catch( console.log );
    }, [ uid ] );

    return (
        <div className="flex justify-between">
            <h1 className="font-black text-4xl">{ project?.name }</h1>

            <div className="flex items-center gap-2 text-gray-400 hover:text-black cursor-pointer">
                <Icons.Edit className="h-6 w-6"/>

                <Link to={ `edit` } className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold">
                    Editar
                </Link>
            </div>
        </div>
    );
};

export default ProjectDetails;
