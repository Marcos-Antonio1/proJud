"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalTechnicianModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const Technician_entity_1 = require("./entity/Technician.entity");
const legal_techinician_controller_1 = require("./legal-techinician.controller");
const legal_techinician_repository_1 = require("./legal-techinician.repository");
const legal_technician_service_1 = require("./legal-technician.service");
let LegalTechnicianModule = class LegalTechnicianModule {
};
LegalTechnicianModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Technician_entity_1.TechnicianEntity, legal_techinician_repository_1.techinicianRepository]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
        controllers: [legal_techinician_controller_1.LegalTechinicianController],
        providers: [legal_technician_service_1.LegalTechnicianService],
        exports: [legal_technician_service_1.LegalTechnicianService]
    })
], LegalTechnicianModule);
exports.LegalTechnicianModule = LegalTechnicianModule;
//# sourceMappingURL=legal-technician.module.js.map