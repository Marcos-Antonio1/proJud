"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processRepository = void 0;
const legal_technician_service_1 = require("../legal-technician/legal-technician.service");
const typeorm_1 = require("typeorm");
const process_entity_1 = require("./entity/process.entity");
let processRepository = class processRepository extends typeorm_1.Repository {
    async findOneProcess(number_process) {
        return await this.findOne(number_process);
    }
    async registerProcess(user, data) {
        let pro = this.create(data);
        pro.tecCreate = user;
        return this.save(pro);
    }
    async EditProcess(number_process, data) {
        let pro_found = await this.findOne(number_process);
        this.merge(pro_found, data);
        return this.save(pro_found);
    }
    async getAllProcess() {
        return this.createQueryBuilder('process').getMany();
    }
    async updateProcess(process) {
        return this.save(process);
    }
};
processRepository = __decorate([
    (0, typeorm_1.EntityRepository)(process_entity_1.ProcessEntity)
], processRepository);
exports.processRepository = processRepository;
//# sourceMappingURL=process.repository.js.map