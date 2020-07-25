import { Controller, Get, Post, Body, Res, HttpStatus, Param, NotFoundException, Delete, Put, Logger } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';
import { Professional } from './interfaces/professional.model';
import { CreateProfessionalDto } from './DTO/createProfessional.dto';

@Controller('professionals')
export class ProfessionalsController {

    constructor(private professionalsService: ProfessionalsService){}
    @Get()
    async getProfessionals(@Res() res): Promise<Professional[]> {
        const professionals = await this.professionalsService.getProfessionals();
        return res.status(HttpStatus.OK).json(professionals);
    }
    @Post()
    async createProfessional(@Res() res, @Body() createProfessionalDto: CreateProfessionalDto): Promise<Professional> {
        const professional = await this.professionalsService.createProfessional(createProfessionalDto);
        return res.status(HttpStatus.OK).json({
            message: 'Professional Created',
            professional
        });
    }
    @Get('/:id')
    async getProfessional(@Res() res, @Param('id') id: string): Promise<Professional> {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const professional = await this.professionalsService.getProfessional(id);
            if (!professional) throw new NotFoundException("Patient not found");
            return res.status(HttpStatus.OK).json(professional);
        }
        else{
            throw new NotFoundException("Professional not found")
        }
    }

    @Delete('/:id')
    async deleteProfessional(@Res() res, @Param('id') id: string): Promise<Professional> {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const professional = await this.professionalsService.deleteProfessional(id);
            if (!professional) throw new NotFoundException("Professional not found");
            return res.status(HttpStatus.OK).json({
                message: 'Professional Deleted',
            });
        }
        else{
            throw new NotFoundException("Professional not found")
        }
    }
    @Put('/:id')
    async updateProfessional(
        @Res() res, 
        @Body() createDto: CreateProfessionalDto, 
        @Param('id') id): Promise<Professional> {

        const professional = await this.professionalsService.updateUser(id, createDto);
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            if (!professional) throw new NotFoundException('Professional not found');
            return res.status(HttpStatus.OK).json({
                message: 'Professional Updated  Successfully',
                professional
            });
        }
        throw new NotFoundException("Professional not found")
       
    }
}
