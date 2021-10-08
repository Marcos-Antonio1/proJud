import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsEmail, Matches } from "class-validator";
export class CreateTechnicianDto{
    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email:string;
    
    @IsNotEmpty()
    @ApiProperty()
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message:"A senha deve conter letras maiúsculas e minúsculas pelo menos um caractere especial e números"})
    password:string;
}