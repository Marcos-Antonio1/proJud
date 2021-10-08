import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
        registration: string;
        name: string;
        email: string;
        updatedAt: string;
        createAt: string;
        process: import("../process/entity/process.entity").ProcessEntity[];
        processEdited: import("../process/entity/process.entity").ProcessEntity[];
    }>;
}
export {};
