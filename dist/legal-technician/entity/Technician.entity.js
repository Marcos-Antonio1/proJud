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
exports.TechnicianEntity = void 0;
const process_entity_1 = require("../../process/entity/process.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
let TechnicianEntity = class TechnicianEntity {
    async hashPassword() {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], TechnicianEntity.prototype, "registration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TechnicianEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], TechnicianEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TechnicianEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", String)
], TechnicianEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", String)
], TechnicianEntity.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => process_entity_1.ProcessEntity, process => process.tecCreate),
    __metadata("design:type", Array)
], TechnicianEntity.prototype, "process", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => process_entity_1.ProcessEntity, processEdited => processEdited.tecLastEdit),
    __metadata("design:type", Array)
], TechnicianEntity.prototype, "processEdited", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TechnicianEntity.prototype, "hashPassword", null);
TechnicianEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'technician' })
], TechnicianEntity);
exports.TechnicianEntity = TechnicianEntity;
//# sourceMappingURL=Technician.entity.js.map