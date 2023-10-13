import { UserService } from './user.service';
import { CreateUserInput } from './dto/createUser.input';
import { User } from '@prisma/client';
import { GetUserArgs } from './dto/getUser.args';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<User>;
    getUser(getUserArgs: GetUserArgs): Promise<User>;
}
