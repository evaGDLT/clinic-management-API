import { Patient } from './interfaces/patient.model';
import { Model } from 'mongoose';
import { CreatePatientDto } from './DTO/createPatient.dto';
export declare class PatientsService {
    private patientModel;
    constructor(patientModel: Model<Patient>);
    getPatients(): Promise<Patient[]>;
    createPatient(createDto: CreatePatientDto): Promise<Patient>;
    getPatient(id: string): Promise<Patient>;
    deletePatient(id: string): Promise<Patient>;
    updateUser(id: string, createPatientDto: CreatePatientDto): Promise<Patient>;
}
