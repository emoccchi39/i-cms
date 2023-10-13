import { Status } from '@prisma/client';
export declare class UpdateTaskInput {
    id: number;
    name?: string;
    dueDate?: string;
    status?: Status;
    description?: string;
}
