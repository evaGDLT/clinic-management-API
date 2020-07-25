import { ProfessionalsService } from './professionals.service';
import { Professional } from './interfaces/professional.model';
import { CreateProfessionalDto } from './DTO/createProfessional.dto';
export declare class ProfessionalsController {
    private professionalsService;
    constructor(professionalsService: ProfessionalsService);
    getProfessionals(res: any): Promise<Professional[]>;
    createProfessional(res: any, createProfessionalDto: CreateProfessionalDto): Promise<Professional>;
    getProfessional(res: any, id: string): Promise<Professional>;
    deleteProfessional(res: any, id: string): Promise<Professional>;
    updateProfessional(res: any, createDto: CreateProfessionalDto, id: any): Promise<Professional>;
}
