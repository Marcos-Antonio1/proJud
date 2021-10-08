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
exports.ProcessEntity = void 0;
const Technician_entity_1 = require("../../legal-technician/entity/Technician.entity");
const typeorm_1 = require("typeorm");
let ProcessEntity = class ProcessEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], ProcessEntity.prototype, "number_process", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: ['criminal', 'civil', 'pequenas causas'] }),
    __metadata("design:type", String)
], ProcessEntity.prototype, "typy_action", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProcessEntity.prototype, "accused_party", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProcessEntity.prototype, "accuse_part", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProcessEntity.prototype, "process_text", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], ProcessEntity.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Technician_entity_1.TechnicianEntity, tecCreate => tecCreate.process),
    __metadata("design:type", Technician_entity_1.TechnicianEntity)
], ProcessEntity.prototype, "tecCreate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Technician_entity_1.TechnicianEntity, tecLastEdit => tecLastEdit.processEdited),
    __metadata("design:type", Technician_entity_1.TechnicianEntity)
], ProcessEntity.prototype, "tecLastEdit", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Technician_entity_1.TechnicianEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Technician_entity_1.TechnicianEntity)
], ProcessEntity.prototype, "tecEditing", void 0);
ProcessEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'process' })
], ProcessEntity);
exports.ProcessEntity = ProcessEntity;
//# sourceMappingURL=process.entity.js.map