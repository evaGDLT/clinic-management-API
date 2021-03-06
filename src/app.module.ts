import { ProfessionalsModule } from './professionals/professionals.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProfessionalsModule, PatientsModule, ConfigModule.forRoot({
      envFilePath: '.env',
    }), PatientsModule,
    MongooseModule.forRoot("mongodb+srv://Eva:eva91@cluster0.vm8qj.mongodb.net/users?retryWrites=true&w=majority"),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }


