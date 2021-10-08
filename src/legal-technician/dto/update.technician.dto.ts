import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsEmail, IsOptional } from "class-validator";

export class UpdateTechnicianDto {

    @IsOptional()
    @ApiProperty()
    name: string;

    
    @IsEmail()
    @IsOptional()
    @ApiProperty()
    email:string;
}