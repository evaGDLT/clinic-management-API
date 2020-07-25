"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsModule = void 0;
const common_1 = require("@nestjs/common");
const patient_controller_1 = require("./patient.controller");
const patients_service_1 = require("./patients.service");
const mongoose_1 = require("@nestjs/mongoose");
const patient_schema_1 = require("./schemas/patient.schema");
let PatientsModule = class PatientsModule {
};
PatientsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'patients', schema: patient_schema_1.patientSchema }]),
        ],
        controllers: [patient_controller_1.PatientController],
        providers: [patients_service_1.PatientsService]
    })
], PatientsModule);
exports.PatientsModule = PatientsModule;
//# sourceMappingURL=patients.module.js.map