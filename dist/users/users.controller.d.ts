import { UsersService } from './users.service';
import { RegisterUserDto } from './DTO/register-user.dto';
import { User } from './interfaces/user.interface';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    registerUser(registerUserDto: RegisterUserDto): Promise<void>;
    getUsers(): Promise<User[]>;
    getUserByEmail(email: any): Promise<User>;
}
