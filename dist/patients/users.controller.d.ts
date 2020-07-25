import { UsersService } from './users.service';
import { User } from './user.model';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(res: any): Promise<User[]>;
}
