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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePatientDto = exports.Issurance = exports.Address = void 0;
const swagger_1 = require("@nestjs/swagger");
const patient_model_1 = require("../interfaces/patient.model");
class Address {
}
exports.Address = Address;
class Issurance {
}
exports.Issurance = Issurance;
class CreatePatientDto {
}
__decorate([
    swagger_1.ApiProperty({
        description: "Tipo de usuario (paciente)"
    }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(patient_model_1.personalDataApi),
    __metadata("design:type", Object)
], CreatePatientDto.prototype, "personalData", void 0);
__decorate([
    swagger_1.ApiProperty(patient_model_1.issuranceApi),
    __metadata("design:type", Array)
], CreatePatientDto.prototype, "issurances", void 0);
__decorate([
    swagger_1.ApiProperty(patient_model_1.addressApi),
    __metadata("design:type", Address)
], CreatePatientDto.prototype, "address", void 0);
exports.CreatePatientDto = CreatePatientDto;
//# sourceMappingURL=createPatient.dto.js.map