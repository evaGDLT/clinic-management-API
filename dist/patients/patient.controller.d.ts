import { PatientsService } from './patients.service';
import { Patient } from './interfaces/patient.model';
import { CreatePatientDto } from './DTO/createPatient.dto';
export declare class PatientController {
    private patientsService;
    constructor(patientsService: PatientsService);
    getPatients(res: any): Promise<Patient[]>;
    createPatient(res: any, createPatientDto: CreatePatientDto): Promise<Patient>;
    getPatient(res: any, id: string): Promise<Patient>;
    deletePatient(res: any, id: string): Promise<Patient>;
    updatePatient(res: any, createPatientDto: CreatePatientDto, id: any): Promise<Patient>;
}
