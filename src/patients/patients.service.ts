import { Injectable, Logger } from '@nestjs/common';
import { Patient } from './interfaces/patient.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDto } from './DTO/createPatient.dto';
import { UpdatePatientDto } from './DTO/updatePatient.dto';


@Injectable()
export class PatientsService {
    constructor(@InjectModel("patients") private patientModel: Model<Patient>){}
   
    async getPatients(): Promise<Patient[]>{
        const users = await this.patientModel.find()
        Logger.log(users);
        return users;
    }

     async  createPatient(createDto: CreatePatientDto): Promise<Patient> {
        const patient = new this.patientModel(createDto);
        await patient.save();
        return patient;
    }

    async getPatient(id: string): Promise<Patient>{
        const patient = await this.patientModel.findById(id)
        return patient;
    }

    async deletePatient(id: string): Promise<Patient> {
        const deletedPatient = await this.patientModel.findByIdAndDelete(id);
        return deletedPatient;
    }
    // async updateUser(id: string, updatePatientDto: UpdatePatientDto): Promise<Patient> {
    //     const updatedPatient = await this.patientModel.findByIdAndUpdate({ _id: id}, updatePatientDto);
    //     return updatedPatient;
    // }
    async updateUser(id: string, createPatientDto: CreatePatientDto): Promise<Patient> {
        const updatedPatient = await this.patientModel.findByIdAndUpdate({ _id: id}, createPatientDto, {new: true});
        return updatedPatient;
    }
}

