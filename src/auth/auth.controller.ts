import {Post,Controller, UseGuards,Request, Body } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
@ApiTags('techinician')
export class AuthController {
    constructor(
        private authService:AuthService
    ){}
    
    @ApiOperation({summary:"Login techinician"})
    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Body() body:LoginDto){
        return this.authService.login(body)
    }
}
