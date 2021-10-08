import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TechnicianEntity } from './entity/Technician.entity';
import {LegalTechinicianController} from './legal-techinician.controller';
import { techinicianRepository } from './legal-techinician.repository';
import { LegalTechnicianService } from './legal-technician.service';

@Module({
  imports: [TypeOrmModule.forFeature([TechnicianEntity,techinicianRepository]),
  forwardRef(() => AuthModule)
],
  controllers: [LegalTechinicianController],
  providers: [LegalTechnicianService],
  exports:[LegalTechnicianService]
})
export class LegalTechnicianModule {}
