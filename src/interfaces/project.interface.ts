import { User } from '@/interfaces/user.interface.ts';

export interface Project {
    uid: string;
    name: string;
    description: string;
    client: string;
    deadline: Date;
    isCompleted: boolean;
    collaborators: User[];
    createdBy: User;
}
