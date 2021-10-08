import { ProcessEntity } from "src/process/entity/process.entity";
export declare class TechnicianEntity {
    registration: string;
    name: string;
    email: string;
    password: string;
    updatedAt: string;
    createAt: string;
    process: ProcessEntity[];
    processEdited: ProcessEntity[];
    hashPassword(): Promise<void>;
}
