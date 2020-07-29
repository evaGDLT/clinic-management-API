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
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PatientsService = class PatientsService {
    constructor(patientModel) {
        this.patientModel = patientModel;
    }
    async getPatients() {
        return await this.patientModel.find();
    }
    async createPatient(createDto) {
        const patient = new this.patientModel(createDto);
        await patient.save();
        return patient;
    }
    async getPatient(id) {
        const patient = await this.patientModel.findById(id);
        return patient;
    }
    async deletePatient(id) {
        const deletedPatient = await this.patientModel.findByIdAndDelete(id);
        return deletedPatient;
    }
    async updateUser(id, createPatientDto) {
        const updatedPatient = await this.patientModel.findByIdAndUpdate({ _id: id }, createPatientDto, { new: true });
        return updatedPatient;
    }
};
PatientsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("patients")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PatientsService);
exports.PatientsService = PatientsService;
//# sourceMappingURL=patients.service.js.map