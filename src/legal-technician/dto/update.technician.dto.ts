import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsEmail } from "class-validator";

export class UpdateTechnicianDto {

    @IsNotEmpty()
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email:string;
}