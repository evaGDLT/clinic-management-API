import { Module } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';
import { ProfessionalsController } from './professionals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { professionalSchema } from './schemas/professional.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{name:'professionals', schema: professionalSchema}]),
  ],
  providers: [ProfessionalsService],
  controllers: [ProfessionalsController]
})
export class ProfessionalsModule {}
