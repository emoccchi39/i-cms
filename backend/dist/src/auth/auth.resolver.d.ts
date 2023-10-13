import { AuthService } from './auth.service';
import { SignInResponse } from './dto/signinResponse';
import { SignInInput } from './dto/signIn.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInInput: SignInInput, context: any): Promise<SignInResponse>;
}
