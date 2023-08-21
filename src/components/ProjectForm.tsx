import { FormEvent, useEffect, useState } from 'react';
import { Alert, AlertProps } from '@/components/Alert.tsx';
import { ApiError } from '@/services/client-http';
import { createProject, updateProject } from '@/services';
import { useProjects } from '@/hooks';
import { ProjectsActions } from '@/context';
import { useNavigate } from 'react-router-dom';
import { Project } from '@/interfaces';

interface Props {
    project?: Project;
}

export const ProjectForm = ( { project }: Props ) => {
    const navigate = useNavigate();
    const { dispatch } = useProjects();
    const [ name, setName ] = useState( '' );
    const [ description, setDescription ] = useState( '' );
    const [ client, setClient ] = useState( '' );
    const [ deadline, setDeadline ] = useState( '' );
    const [ alert, setAlert ] = useState<AlertProps | null>( null );

    useEffect( () => {
        if ( project ) {
            const date = project.deadline.toString().split( 'T' )[ 0 ];

            setName( project.name );
            setDescription( project.description );
            setClient( project.client );
            setDeadline( date );
        }
    }, [ project ] );

    const handleSubmit = async ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();

        try {
            setAlert( null );

            if ( [ name, description, client, deadline ].includes( '' ) ) {
                setAlert( {
                    type: 'error',
                    message: 'Todos los campos son obligatorios',
                } );
                return;
            }

            const data = {
                name,
                description,
                client,
                deadline: new Date( deadline ),
            };

            if ( project ) {
                const updatedProject = await updateProject( project.uid, data );
                dispatch( {
                    type: ProjectsActions.UPDATE_PROJECT,
                    payload: updatedProject,
                } );
            } else {
                const newProject = await createProject( data );
                dispatch( {
                    type: ProjectsActions.ADD_PROJECT,
                    payload: newProject,
                } );
            }
            
            navigate( '/projects' );

        } catch ( e ) {
            const { message } = e as ApiError;
            setAlert( {
                message,
                type: 'error',
            } );
        }
    };

    return (
        <>
            <form className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow" onSubmit={ handleSubmit }>
                <div>
                    <label htmlFor="name" className="text-gray-700 uppercase font-bold text-sm">
                        Nombre del proyecto
                    </label>
                    <input type="text" id="name" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                           value={ name } onChange={ e => setName( e.target.value ) }
                           placeholder="Nombre del proyecto"/>
                </div>

                <div className="mt-5">
                    <label htmlFor="description" className="text-gray-700 uppercase font-bold text-sm">
                        Descripcion del proyecto
                    </label>
                    <textarea id="description" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                              value={ description } onChange={ e => setDescription( e.target.value ) }
                              placeholder="Descripcion del proyecto"/>
                </div>

                <div>
                    <label htmlFor="client" className="text-gray-700 uppercase font-bold text-sm">
                        Nombre del cliente
                    </label>
                    <input type="text" id="cliente" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                           value={ client } onChange={ e => setClient( e.target.value ) }
                           placeholder="Nombre del cliente"/>
                </div>

                <div className="mt-5">
                    <label htmlFor="date" className="text-gray-700 uppercase font-bold text-sm">
                        Fecha de entrega
                    </label>
                    <input type="date" id="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                           value={ deadline } onChange={ e => setDeadline( e.target.value ) }
                    />
                </div>

                { alert && <Alert { ...alert } /> }

                <button type="submit"
                        className="w-full mt-10 p-5 bg-sky-600 hover:bg-sky-800 rounded-md text-white font-bold uppercase">
                    {
                        project ? 'Editar proyecto' : 'Crear proyecto'
                    }
                </button>
            </form>
        </>
    );
};
