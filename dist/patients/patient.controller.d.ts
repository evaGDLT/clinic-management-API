import { PatientsService } from './patients.service';
import { Patient } from './interfaces/patient.model';
import { CreatePatientDto } from './DTO/createPatient.dto';
export declare class PatientController {
    private patientsService;
    constructor(patientsService: PatientsService);
    getUsers(res: any): Promise<Patient[]>;
    createUser(res: any, createPatientDto: CreatePatientDto): Promise<Patient>;
    getUser(res: any, id: string): Promise<Patient>;
    deleteUser(res: any, id: string): Promise<Patient>;
    updateUser(res: any, createPatientDto: CreatePatientDto, id: any): Promise<Patient>;
}
