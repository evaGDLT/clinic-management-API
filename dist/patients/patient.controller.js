"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const patients_service_1 = require("./patients.service");
const createPatient_dto_1 = require("./DTO/createPatient.dto");
const swagger_1 = require("@nestjs/swagger");
let PatientController = class PatientController {
    constructor(patientsService) {
        this.patientsService = patientsService;
    }
    async getPatients(res) {
        const patients = await this.patientsService.getPatients();
        return res.status(common_1.HttpStatus.OK).json(patients);
    }
    async createPatient(res, createPatientDto) {
        const patient = await this.patientsService.createPatient(createPatientDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Patient Created',
            patient
        });
    }
    async getPatient(res, id) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const patient = await this.patientsService.getPatient(id);
            if (!patient)
                throw new common_1.NotFoundException("Patient not found");
            return res.status(common_1.HttpStatus.OK).json(patient);
        }
        else {
            throw new common_1.NotFoundException("Patient not found");
        }
    }
    async deletePatient(res, id) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const patient = await this.patientsService.deletePatient(id);
            if (!patient)
                throw new common_1.NotFoundException("Patient not found");
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Patient Deleted',
            });
        }
        else {
            throw new common_1.NotFoundException("Patient not found");
        }
    }
    async updatePatient(res, createPatientDto, id) {
        const patient = await this.patientsService.updateUser(id, createPatientDto);
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            if (!patient)
                throw new common_1.NotFoundException('Patient not found');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Patient Updated  Successfully',
                patient
            });
        }
        throw new common_1.NotFoundException("Patient not found");
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPatients", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: 201, description: "Patient Created" }),
    swagger_1.ApiResponse({ status: 401, description: "No se ha podido crear el paciente" }),
    swagger_1.ApiCreatedResponse({
        description: "Paciente creado",
        type: "Patient"
    }),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createPatient_dto_1.CreatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "createPatient", null);
__decorate([
    common_1.Get('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "getPatient", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "deletePatient", null);
__decorate([
    common_1.Put('/:id'),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createPatient_dto_1.CreatePatientDto, Object]),
    __metadata("design:returntype", Promise)
], PatientController.prototype, "updatePatient", null);
PatientController = __decorate([
    common_1.Controller('patients'),
    __metadata("design:paramtypes", [patients_service_1.PatientsService])
], PatientController);
exports.PatientController = PatientController;
//# sourceMappingURL=patient.controller.js.map