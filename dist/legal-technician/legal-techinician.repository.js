"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.techinicianRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Technician_entity_1 = require("./entity/Technician.entity");
let techinicianRepository = class techinicianRepository extends typeorm_1.Repository {
    async findOneTechnician(registration) {
        try {
            return await this.findOneOrFail(registration);
        }
        catch (error) {
            throw new common_1.NotFoundException("Técnico não encontrado");
        }
    }
    async findByEmail(email) {
        return await this.findOne({ email });
    }
    async registerTecninician(data) {
        const tec = await this.findByEmail(data.email);
        try {
            const tec = this.create(data);
            return await this.save(tec);
        }
        catch (error) {
            if (error.code == 23505) {
                throw new common_1.ConflictException('Esse usuário já está cadastrado');
            }
            else {
                throw error;
            }
        }
    }
    async updateDataTechinician(registration, data) {
        const tec = await this.findOneTechnician(registration);
        this.merge(tec, data);
        return this.save(tec);
    }
};
techinicianRepository = __decorate([
    (0, typeorm_1.EntityRepository)(Technician_entity_1.TechnicianEntity)
], techinicianRepository);
exports.techinicianRepository = techinicianRepository;
//# sourceMappingURL=legal-techinician.repository.js.map