import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientsService } from './patients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { patientSchema } from './schemas/patient.schema'

@Module({
    imports:[
        MongooseModule.forFeature([{name:'patients', schema: patientSchema}]),
      ],
  controllers: [PatientController],
  providers: [PatientsService]
})
export class PatientsModule {} 
