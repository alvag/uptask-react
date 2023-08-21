import { FC, useEffect } from 'react';
import { useProjects } from '@/hooks';
import { getProjects } from '@/services';
import { ProjectsActions } from '@/context';

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
    const { dispatch } = useProjects();

    useEffect( () => {
        getProjects()
            .then( ( projects ) => {
                dispatch( {
                    type: ProjectsActions.SET_PROJECTS,
                    payload: projects,
                } );
            } )
            .catch( console.log );
    }, [ dispatch ] );

    return (
        <>
            <h1 className="text-4xl font-black">Proyectos</h1>

            <div className=""></div>
        </>
    );
};

export default HomePage;
