"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkInProcessModule = void 0;
const common_1 = require("@nestjs/common");
const legal_technician_module_1 = require("../legal-technician/legal-technician.module");
const process_module_1 = require("../process/process.module");
const work_in_process_controller_1 = require("./work-in-process.controller");
const work_in_process_service_1 = require("./work-in-process.service");
let WorkInProcessModule = class WorkInProcessModule {
};
WorkInProcessModule = __decorate([
    (0, common_1.Module)({
        controllers: [work_in_process_controller_1.WorkInProcessController],
        providers: [work_in_process_service_1.WorkInProcessService],
        imports: [process_module_1.ProcessModule, legal_technician_module_1.LegalTechnicianModule]
    })
], WorkInProcessModule);
exports.WorkInProcessModule = WorkInProcessModule;
//# sourceMappingURL=work-in-process.module.js.map