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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessService = void 0;
const common_1 = require("@nestjs/common");
const legal_technician_service_1 = require("../legal-technician/legal-technician.service");
const process_repository_1 = require("./process.repository");
const common_2 = require("@nestjs/common");
let ProcessService = class ProcessService {
    constructor(process, technician) {
        this.process = process;
        this.technician = technician;
    }
    async findOne(number_process) {
        return this.process.findOneProcess(number_process);
    }
    async registerProcess(registration, data) {
        const user = await this.technician.findOne(registration);
        return this.process.registerProcess(user, data);
    }
    async EditProcess(number_process, data) {
        return this.process.EditProcess(number_process, data);
    }
    async getAllProcess() {
        return this.process.getAllProcess();
    }
    async create(data) {
        return this.process.create(data);
    }
    async processUpdate(process) {
        return this.process.updateProcess(process);
    }
    async toWork(technician, n_process) {
        const techinician_found = await this.technician.findByEmail(technician.email);
        let process = await this.process.findOne({ number_process: n_process, tecEditing: techinician_found });
        if (process) {
            return { msg: "você já está trabalhando neste processo" };
        }
        const { affected } = await this.process.update({ number_process: n_process, tecEditing: null }, { tecEditing: techinician_found });
        if (affected == 1) {
            return { msg: "processo atribuido com sucesso" };
        }
        else {
            throw new common_2.ConflictException("processo já está sendo editado");
        }
    }
    async finishWork(n_process, techinician) {
        const techinician_found = await this.technician.findByEmail(techinician.email);
        const { affected } = await this.process.update({ number_process: n_process, tecEditing: techinician_found }, { tecEditing: null, tecLastEdit: techinician_found, updateAt: new Date() });
        if (affected == 1) {
            return { msg: "Atualização finalizada" };
        }
        else {
            throw new common_2.ConflictException("processo só pode ser finalizado pela pessoa que está o editando");
        }
    }
};
ProcessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [process_repository_1.processRepository,
        legal_technician_service_1.LegalTechnicianService])
], ProcessService);
exports.ProcessService = ProcessService;
//# sourceMappingURL=process.service.js.map