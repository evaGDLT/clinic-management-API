import { Injectable } from '@nestjs/common';
import { Professional } from './interfaces/professional.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProfessionalDto } from './DTO/createProfessional.dto';
import { professional } from './interfaces/professional.model';

@Injectable()
export class ProfessionalsService {
    constructor(@InjectModel("professionals") private professionalModel: Model<Professional>){}

    async getProfessionals(): Promise<Professional[]>{
        const professionals= await this.professionalModel.find()
        return professionals;
    }
    async  createProfessional(createDto: CreateProfessionalDto): Promise<Professional> {
        const professional = new this.professionalModel(createDto);
        await professional.save();
        return professional;
    }
    async getProfessional(id: string): Promise<Professional>{
        const professional = await this.professionalModel.findById(id)
        return professional;
    }

    async deleteProfessional(id: string): Promise<Professional> {
        const deletedProfessional = await this.professionalModel.findByIdAndDelete(id);
        return deletedProfessional;
    }
    async updateUser(id: string, createDto: CreateProfessionalDto): Promise<Professional> {
        const updatedProfessional = await this.professionalModel.findByIdAndUpdate({ _id: id}, createDto, {new: true});
        return updatedProfessional;
    }
 
}
