import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './DTO/register-user.dto';
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
}
