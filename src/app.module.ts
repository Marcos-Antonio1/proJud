import { Module } from '@nestjs/common';
import { LegalTechnicianModule } from './legal-technician/legal-technician.module';
import { ProcessModule } from './process/process.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { LegalTechnicianService } from './legal-technician/legal-technician.service';
import { AuthModule } from './auth/auth.module';
import { WorkInProcessModule } from './work-in-process/work-in-process.module';


@Module({
  imports: [
  TypeOrmModule.forRoot({
    type:"postgres",
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'proJud',
    entities: [__dirname +'/**/*.entity{.js,.ts}'],
    synchronize: true,
  }),
  LegalTechnicianModule, 
  ProcessModule, AuthModule, WorkInProcessModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
