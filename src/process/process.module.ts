import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { LegalTechnicianModule } from 'src/legal-technician/legal-technician.module';
import { ProcessEntity } from './entity/process.entity';
import { ProcessController } from './process.controller';
import { processRepository } from './process.repository';
import { ProcessService } from './process.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessEntity,processRepository]),
  LegalTechnicianModule,AuthModule],
  controllers: [ ProcessController],
  providers: [ProcessService],
  exports: [ProcessService,]
})
export class ProcessModule {}
