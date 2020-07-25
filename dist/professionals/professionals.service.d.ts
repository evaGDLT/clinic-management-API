import { Professional } from './interfaces/professional.model';
import { Model } from 'mongoose';
import { CreateProfessionalDto } from './DTO/createProfessional.dto';
export declare class ProfessionalsService {
    private professionalModel;
    constructor(professionalModel: Model<Professional>);
    getProfessionals(): Promise<Professional[]>;
    createProfessional(createDto: CreateProfessionalDto): Promise<Professional>;
    getProfessional(id: string): Promise<Professional>;
    deleteProfessional(id: string): Promise<Professional>;
    updateUser(id: string, createDto: CreateProfessionalDto): Promise<Professional>;
}
