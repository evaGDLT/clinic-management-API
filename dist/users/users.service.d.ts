import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { RegisterUserDto } from './DTO/register-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    registerUser(registerUserDto: RegisterUserDto): Promise<void>;
    findByEmail(email: any): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
