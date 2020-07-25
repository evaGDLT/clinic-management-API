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
exports.ProfessionalsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProfessionalsService = class ProfessionalsService {
    constructor(professionalModel) {
        this.professionalModel = professionalModel;
    }
    async getProfessionals() {
        const professionals = await this.professionalModel.find();
        return professionals;
    }
    async createProfessional(createDto) {
        const professional = new this.professionalModel(createDto);
        await professional.save();
        return professional;
    }
    async getProfessional(id) {
        const professional = await this.professionalModel.findById(id);
        return professional;
    }
    async deleteProfessional(id) {
        const deletedProfessional = await this.professionalModel.findByIdAndDelete(id);
        return deletedProfessional;
    }
    async updateUser(id, createDto) {
        const updatedProfessional = await this.professionalModel.findByIdAndUpdate({ _id: id }, createDto, { new: true });
        return updatedProfessional;
    }
};
ProfessionalsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("professionals")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfessionalsService);
exports.ProfessionalsService = ProfessionalsService;
//# sourceMappingURL=professionals.service.js.map