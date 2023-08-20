import { FC } from 'react';

interface ConfirmAccountProps {}

const ConfirmAccountPage: FC<ConfirmAccountProps> = () => {
    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Confirma tu cuenta y comienza a crear
                tus { ' ' }
                <span className="text-slate-700">proyectos</span>
            </h1>
        </>
    );
};

export default ConfirmAccountPage;
