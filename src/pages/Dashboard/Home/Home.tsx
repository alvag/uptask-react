import { FC } from 'react';
import { useProjects } from '@/hooks';
import { ProjectsList } from '@/components';

interface HomeProps {}

const HomePage: FC<HomeProps> = () => {
    const { projects } = useProjects().state;

    console.log( projects );


    return (
        <>
            <h1 className="text-4xl font-black">Proyectos</h1>

            <div className="bg-white shadow mt-10 rounded-lg">
                {
                    projects.length
                        ? <ProjectsList projects={ projects }/>
                        : <p className="text-gray-600 uppercase p-5 text-center">Aun no tienes proyectos</p>
                }
            </div>
        </>
    );
};

export default HomePage;
