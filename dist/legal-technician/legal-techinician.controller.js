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
exports.LegalTechinicianController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const JwtAuthGuard_1 = require("../auth/JwtAuthGuard");
const create_technician_dto_1 = require("./dto/create.technician.dto");
const update_technician_dto_1 = require("./dto/update.technician.dto");
const legal_technician_service_1 = require("./legal-technician.service");
let LegalTechinicianController = class LegalTechinicianController {
    constructor(techinicianService) {
        this.techinicianService = techinicianService;
    }
    async registerTecninician(body) {
        return await this.techinicianService.register(body);
    }
    async updataTecninician(registration, body) {
        return await this.techinicianService.update(registration, body);
    }
};
__decorate([
    (0, common_2.Post)('/register'),
    (0, swagger_1.ApiOperation)({ summary: "Create new techinician" }),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_technician_dto_1.CreateTechnicianDto]),
    __metadata("design:returntype", Promise)
], LegalTechinicianController.prototype, "registerTecninician", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(JwtAuthGuard_1.JwtAuthGuard),
    (0, common_2.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "edit a techinician" }),
    __param(0, (0, common_2.Param)('registration')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_technician_dto_1.UpdateTechnicianDto]),
    __metadata("design:returntype", Promise)
], LegalTechinicianController.prototype, "updataTecninician", null);
LegalTechinicianController = __decorate([
    (0, common_3.Controller)('techinician'),
    (0, swagger_1.ApiTags)('techinician'),
    __metadata("design:paramtypes", [legal_technician_service_1.LegalTechnicianService])
], LegalTechinicianController);
exports.LegalTechinicianController = LegalTechinicianController;
//# sourceMappingURL=legal-techinician.controller.js.map