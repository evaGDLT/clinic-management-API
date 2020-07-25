import { User } from './user.model';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    getUsers(): Promise<User[]>;
}
