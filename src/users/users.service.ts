import { Injectable, Inject, ConflictException, BadGatewayException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { RegisterUserDto } from './DTO/register-user.dto';
import   *  as  bcrypt  from "bcrypt";

@Injectable()
export class UsersService {
    
    constructor(@InjectModel("users") private userModel: Model<User>){}

    async registerUser (registerUserDto: RegisterUserDto) {
        const session = await (new this.userModel(registerUserDto)).db.startSession();
        try{
            session.startTransaction();
            let password = await bcrypt.hash(registerUserDto.password, 10);
            let result = await this.userModel.create([{"email":registerUserDto.email,"password": password}],{session: session});
            await session.commitTransaction();
        }catch(error){
            await session.abortTransaction();
            if(error.code === 11000) throw new ConflictException("Usuario duplicado");
            throw new BadGatewayException();
        }finally{
            session.endSession();
        }
    }
    async findByEmail(email): Promise<User>{
        return await this.userModel.findOne({email: email});
     }
 
     async getAllUsers(){
        return await this.userModel.find();
     }


}
