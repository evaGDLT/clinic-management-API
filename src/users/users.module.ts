import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'users', schema: userSchema}])],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController],
 
})
export class UsersModule {}
