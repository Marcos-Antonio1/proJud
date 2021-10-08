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
exports.WorkInProcessController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const get_user_decorator_1 = require("../auth/get-user-decorator");
const JwtAuthGuard_1 = require("../auth/JwtAuthGuard");
const Technician_entity_1 = require("../legal-technician/entity/Technician.entity");
const work_in_process_service_1 = require("./work-in-process.service");
let WorkInProcessController = class WorkInProcessController {
    constructor(workProcess) {
        this.workProcess = workProcess;
    }
    async workingInProcess(id, techinician) {
        return this.workProcess.toStartWork(techinician, id);
    }
    async finishWork(process_number, techinician) {
        return this.workProcess.finishWork(process_number, techinician);
    }
};
__decorate([
    (0, common_2.Post)('start/:number_process'),
    (0, swagger_1.ApiOperation)({ summary: " start working in process" }),
    __param(0, (0, common_1.Param)('number_process')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Technician_entity_1.TechnicianEntity]),
    __metadata("design:returntype", Promise)
], WorkInProcessController.prototype, "workingInProcess", null);
__decorate([
    (0, common_2.Post)('finishWork/:number_process'),
    (0, swagger_1.ApiOperation)({ summary: "Finish Work" }),
    __param(0, (0, common_1.Param)('number_process')),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Technician_entity_1.TechnicianEntity]),
    __metadata("design:returntype", Promise)
], WorkInProcessController.prototype, "finishWork", null);
WorkInProcessController = __decorate([
    (0, common_1.UseGuards)(JwtAuthGuard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('WorkInProcess'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_3.Controller)('work-in-process'),
    __metadata("design:paramtypes", [work_in_process_service_1.WorkInProcessService])
], WorkInProcessController);
exports.WorkInProcessController = WorkInProcessController;
//# sourceMappingURL=work-in-process.controller.js.map