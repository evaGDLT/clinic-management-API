import { Controller, Post, Body, HttpException, HttpStatus, Get, Res, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './DTO/register-user.dto';
import { User } from './interfaces/user.interface';
import { Payload } from './DTO/payload.dto';
import { Observable } from 'rxjs';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    
    @Post()
    registerUser(@Body() registerUserDto: RegisterUserDto){
        try{
            let data = this.usersService.registerUser(registerUserDto);
            return data;
        }catch(Exception){
            throw new HttpException("Exception", HttpStatus.CONFLICT);
        }
    }

    @Get()
    getUsers(){
        try{
            return this.usersService.getAllUsers();
        }catch(Exception){
            throw new HttpException("Exception", HttpStatus.CONFLICT);
        }
    }
     @Get('/:email')
    async getUserByEmail(@Param('email') email) {
        const user = await this.usersService.findByEmail(email);
        return user;
    }

}
