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
exports.ProcessController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const JwtAuthGuard_1 = require("../auth/JwtAuthGuard");
const create_process_dto_1 = require("./dto/create.process.dto");
const update_process_dto_1 = require("./dto/update.process.dto");
const process_service_1 = require("./process.service");
let ProcessController = class ProcessController {
    constructor(processService) {
        this.processService = processService;
    }
    async registerProcess(registration, body) {
        return await this.processService.registerProcess(registration, body);
    }
    async findAllProcess() {
        return await this.processService.getAllProcess();
    }
    async findProcess(number_process) {
        return await this.processService.findOne(number_process);
    }
    async editProcess(number_process, body) {
        return await this.processService.EditProcess(number_process, body);
    }
};
__decorate([
    (0, common_1.UseGuards)(JwtAuthGuard_1.JwtAuthGuard),
    (0, common_3.Post)('/register'),
    (0, swagger_1.ApiOperation)({ summary: "Create new process" }),
    __param(0, (0, common_1.Param)('registration')),
    __param(1, (0, common_3.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_process_dto_1.CreateProcessDto]),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "registerProcess", null);
__decorate([
    (0, common_1.UseGuards)(JwtAuthGuard_1.JwtAuthGuard),
    (0, common_1.Get)('/all'),
    (0, swagger_1.ApiOperation)({ summary: "list all process" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "findAllProcess", null);
__decorate([
    (0, common_1.UseGuards)(JwtAuthGuard_1.JwtAuthGuard),
    (0, common_1.Get)(':number_process'),
    (0, swagger_1.ApiOperation)({ summary: "get one process" }),
    __param(0, (0, common_1.Param)('number_process')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "findProcess", null);
__decorate([
    (0, common_1.UseGuards)(JwtAuthGuard_1.JwtAuthGuard),
    (0, common_2.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: "update one process" }),
    __param(0, (0, common_1.Param)('number_process')),
    __param(1, (0, common_3.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_process_dto_1.UpdateProcessDto]),
    __metadata("design:returntype", Promise)
], ProcessController.prototype, "editProcess", null);
ProcessController = __decorate([
    (0, common_3.Controller)('process'),
    (0, swagger_1.ApiTags)('process'),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [process_service_1.ProcessService])
], ProcessController);
exports.ProcessController = ProcessController;
//# sourceMappingURL=process.controller.js.map