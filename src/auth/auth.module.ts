import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';
import { LegalTechnicianModule } from 'src/legal-technician/legal-technician.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [
    forwardRef(() => LegalTechnicianModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions:{
        expiresIn:'3600s'
      }
    })
  ],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
