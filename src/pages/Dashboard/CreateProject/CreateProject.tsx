import { FC } from 'react';
import { ProjectForm } from '@/components';

interface CreateProjectProps {
}

const CreateProjectPage: FC<CreateProjectProps> = () => {
    return (
        <>
            <h1 className="text-4xl font-black">Crear Proyecto</h1>

            <div className="mt-10 flex justify-center">
                <ProjectForm/>
            </div>
        </>
    );
};

export default CreateProjectPage;
