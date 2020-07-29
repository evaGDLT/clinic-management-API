import { UsersService } from './users.service';
import { RegisterUserDto } from './DTO/register-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    registerUser(registerUserDto: RegisterUserDto): Promise<void>;
    getUsers(): Promise<import("./interfaces/user.interface").User[]>;
}
