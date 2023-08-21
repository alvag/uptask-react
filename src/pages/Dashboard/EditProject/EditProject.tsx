import { FC, useEffect, useState } from 'react';
import { Icons, ProjectForm } from '@/components';
import { Project } from '@/interfaces';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteProject, getProject } from '@/services';
import { useProjects } from '@/hooks';
import { ProjectsActions } from '@/context';

interface EditProjectProps {
}

const EditProjectPage: FC<EditProjectProps> = () => {
    const navigate = useNavigate();
    const { dispatch } = useProjects();
    const [ project, setProject ] = useState<Project>();
    const { uid } = useParams();

    useEffect( () => {
        getProject( uid! )
            .then( setProject )
            .catch( console.log );
    }, [ uid ] );

    const handleDelete = async () => {
        try {
            await deleteProject( uid! );
            dispatch( { type: ProjectsActions.DELETE_PROJECT, payload: uid } );
            navigate( '/projects' );
        } catch ( e ) {
            console.log( e );
        }
    };

    return (
        <>
            <div className="flex justify-between">
                <h1 className="font-black text-4xl">Editar: { project?.name }</h1>

                <div className="flex items-center gap-2 text-gray-400 hover:text-black cursor-pointer">
                    <Icons.Delete className="h-6 w-6"/>

                    <button onClick={ handleDelete }
                            className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold">
                        Eliminar
                    </button>
                </div>
            </div>

            <div className="mt-10 flex justify-center">
                <ProjectForm project={ project }/>
            </div>
        </>
    );
};

export default EditProjectPage;
