import { Module } from '@nestjs/common';
import { LegalTechnicianModule } from './legal-technician/legal-technician.module';
import { ProcessModule } from './process/process.module';
import { TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { WorkInProcessModule } from './work-in-process/work-in-process.module';
import { AppController } from './app/app.controller';



@Module({
  imports: [
  TypeOrmModule.forRoot({
    name:"default",
    type:"postgres",
    host: 'ec2-54-172-169-87.compute-1.amazonaws.com',
    port: 5432,
    username: 'itaajdbmjdpgls',
    password: 'bb403b948655d827712d6f7203ec8804016adbc2b575f3106fdf750e459577ea',
    database: 'datik56us3qjh8',
    extra:{
      ssl:{
        rejectUnauthorized: false
      }
    },
    entities: [__dirname +'/**/*.entity{.js,.ts}'],
    synchronize: true,
  }),
  LegalTechnicianModule, 
  ProcessModule, AuthModule, WorkInProcessModule
],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
