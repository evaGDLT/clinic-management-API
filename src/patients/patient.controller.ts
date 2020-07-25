import { Controller, Get, Post, Body, Res, HttpStatus, Param, NotFoundException, Delete, Put, Logger } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from './interfaces/patient.model';
import { CreatePatientDto } from './DTO/createPatient.dto';

@Controller('users')
export class PatientController {
    constructor(private patientsService: PatientsService) { }

    @Get()
    async getUsers(@Res() res): Promise<Patient[]> {
        const patients = await this.patientsService.getPatients();
        return res.status(HttpStatus.OK).json(patients);
    }

    @Post()
    async createUser(@Res() res, @Body() createPatientDto: CreatePatientDto): Promise<Patient> {
        const patient = await this.patientsService.createPatient(createPatientDto);
        return res.status(HttpStatus.OK).json({
            message: 'Patient Created',
            patient
        });
    }

    @Get('/:id')
    async getUser(@Res() res, @Param('id') id: string): Promise<Patient> {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const patient = await this.patientsService.getPatient(id);
            if (!patient) throw new NotFoundException("Patient not found");
            return res.status(HttpStatus.OK).json(patient);
        }
        else{
            throw new NotFoundException("Patient not found")
        }
    }

    @Delete('/:id')
    async deleteUser(@Res() res, @Param('id') id: string): Promise<Patient> {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const patient = await this.patientsService.deletePatient(id);
            if (!patient) throw new NotFoundException("Patient not found");
            return res.status(HttpStatus.OK).json({
                message: 'Patient Deleted',
            });
        }
        else{
            throw new NotFoundException("Patient not found")
        }
    }
    @Put('/:id')
    async updateUser(
        @Res() res, 
        @Body() createPatientDto: CreatePatientDto, 
        @Param('id') id): Promise<Patient> {

        const patient = await this.patientsService.updateUser(id, createPatientDto);
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            if (!patient) throw new NotFoundException('Patient not found');
            return res.status(HttpStatus.OK).json({
                message: 'Patient Updated  Successfully',
                patient
            });
        }
        throw new NotFoundException("Patient not found")
       
    }

}
