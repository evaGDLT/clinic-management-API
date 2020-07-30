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
exports.ProfessionalsController = void 0;
const common_1 = require("@nestjs/common");
const professionals_service_1 = require("./professionals.service");
const createProfessional_dto_1 = require("./DTO/createProfessional.dto");
const swagger_1 = require("@nestjs/swagger");
let ProfessionalsController = class ProfessionalsController {
    constructor(professionalsService) {
        this.professionalsService = professionalsService;
    }
    async getProfessionals(res) {
        const professionals = await this.professionalsService.getProfessionals();
        return res.status(common_1.HttpStatus.OK).json(professionals);
    }
    async createProfessional(res, createProfessionalDto) {
        const professional = await this.professionalsService.createProfessional(createProfessionalDto);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Professional Created',
            professional
        });
    }
    async getProfessional(res, id) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const professional = await this.professionalsService.getProfessional(id);
            if (!professional)
                throw new common_1.NotFoundException("Patient not found");
            return res.status(common_1.HttpStatus.OK).json(professional);
        }
        else {
            throw new common_1.NotFoundException("Professional not found");
        }
    }
    async deleteProfessional(res, id) {
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            const professional = await this.professionalsService.deleteProfessional(id);
            if (!professional)
                throw new common_1.NotFoundException("Professional not found");
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Professional Deleted',
            });
        }
        else {
            throw new common_1.NotFoundException("Professional not found");
        }
    }
    async updateProfessional(res, createDto, id) {
        const professional = await this.professionalsService.updateUser(id, createDto);
        if (id.match(/^[0-9a-fA-F]{24}$/)) {
            if (!professional)
                throw new common_1.NotFoundException('Professional not found');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Professional Updated  Successfully',
                professional
            });
        }
        throw new common_1.NotFoundException("Professional not found");
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfessionalsController.prototype, "getProfessionals", null);
__decorate([
    common_1.Post(),
    swagger_1.ApiResponse({ status: 201, description: "Professional Created" }),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createProfessional_dto_1.CreateProfessionalDto]),
    __metadata("design:returntype", Promise)
], ProfessionalsController.prototype, "createProfessional", null);
__decorate([
    common_1.Get('/:id'),
    swagger_1.ApiResponse({ status: 401, description: "Patient not found" }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProfessionalsController.prototype, "getProfessional", null);
__decorate([
    common_1.Delete('/:id'),
    swagger_1.ApiResponse({ status: 201, description: "Professional Deleted" }),
    swagger_1.ApiResponse({ status: 401, description: "Professional not found" }),
    __param(0, common_1.Res()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], ProfessionalsController.prototype, "deleteProfessional", null);
__decorate([
    common_1.Put('/:id'),
    swagger_1.ApiResponse({ status: 201, description: "Professional Updated  Successfully" }),
    swagger_1.ApiResponse({ status: 401, description: "Professional not found" }),
    __param(0, common_1.Res()),
    __param(1, common_1.Body()),
    __param(2, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createProfessional_dto_1.CreateProfessionalDto, Object]),
    __metadata("design:returntype", Promise)
], ProfessionalsController.prototype, "updateProfessional", null);
ProfessionalsController = __decorate([
    common_1.Controller('professionals'),
    __metadata("design:paramtypes", [professionals_service_1.ProfessionalsService])
], ProfessionalsController);
exports.ProfessionalsController = ProfessionalsController;
//# sourceMappingURL=professionals.controller.js.map