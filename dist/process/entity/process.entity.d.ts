import { TechnicianEntity } from "src/legal-technician/entity/Technician.entity";
declare type Tipo = 'criminal' | 'civil' | 'pequenas causas';
export declare class ProcessEntity {
    number_process: string;
    typy_action: Tipo;
    accused_party: string;
    accuse_part: string;
    process_text: string;
    updateAt: Date;
    tecCreate: TechnicianEntity;
    tecLastEdit: TechnicianEntity;
    tecEditing: TechnicianEntity;
}
export {};
