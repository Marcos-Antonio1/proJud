"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const legal_technician_module_1 = require("../legal-technician/legal-technician.module");
const process_entity_1 = require("./entity/process.entity");
const process_controller_1 = require("./process.controller");
const process_repository_1 = require("./process.repository");
const process_service_1 = require("./process.service");
let ProcessModule = class ProcessModule {
};
ProcessModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([process_entity_1.ProcessEntity, process_repository_1.processRepository]),
            legal_technician_module_1.LegalTechnicianModule, auth_module_1.AuthModule],
        controllers: [process_controller_1.ProcessController],
        providers: [process_service_1.ProcessService],
        exports: [process_service_1.ProcessService,]
    })
], ProcessModule);
exports.ProcessModule = ProcessModule;
//# sourceMappingURL=process.module.js.map