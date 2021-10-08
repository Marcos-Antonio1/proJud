import { Module } from '@nestjs/common';
import { LegalTechnicianModule } from 'src/legal-technician/legal-technician.module';
import { ProcessModule } from 'src/process/process.module';
import { WorkInProcessController } from './work-in-process.controller';
import { WorkInProcessService } from './work-in-process.service';

@Module({
  controllers: [WorkInProcessController],
  providers: [WorkInProcessService],
  imports:[ProcessModule,LegalTechnicianModule]
})
export class WorkInProcessModule {}
