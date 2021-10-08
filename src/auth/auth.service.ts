import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LegalTechnicianService } from 'src/legal-technician/legal-technician.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private techinicianService: LegalTechnicianService,
        private jwtService: JwtService    
    ){}

    async validateTechinician(email:string,password:string){
        const techinician = await this.techinicianService.findByEmail(email);
        if(techinician && await bcrypt.compare(password, techinician.password)){
            const {password,...result}= techinician;
            return result;
        }
            return null;
    }
    async login(techinician:any){
        const payload ={email:techinician.email, registration:techinician.registration}
        return {
            access_token:this.jwtService.sign(payload)
        }  
    } 
}
