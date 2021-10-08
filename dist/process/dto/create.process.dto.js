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
exports.CreateProcessDto = exports.Tipo = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var Tipo;
(function (Tipo) {
    Tipo["criminal"] = "criminal";
    Tipo["civil"] = "civil";
    Tipo["pequenas_causas"] = "pequenas causas";
})(Tipo = exports.Tipo || (exports.Tipo = {}));
class CreateProcessDto {
}
__decorate([
    (0, class_validator_1.IsEnum)(Tipo),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ enum: ['criminal', 'civil', 'pequenas causas'] }),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "typy_action", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "accused_party", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "accuse_part", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProcessDto.prototype, "process_text", void 0);
exports.CreateProcessDto = CreateProcessDto;
//# sourceMappingURL=create.process.dto.js.map