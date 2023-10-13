import { Status } from '@prisma/client';
export declare class Task {
    id: number;
    name: string;
    dueDate: string;
    status: Status;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
