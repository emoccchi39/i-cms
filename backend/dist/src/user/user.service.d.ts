import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInput } from './dto/createUser.input';
import { User } from '@prisma/client';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    getUser(email: string): Promise<User>;
}
