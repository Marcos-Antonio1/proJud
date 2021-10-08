import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsEnum, IsOptional } from "class-validator";

export enum Tipo {
    criminal = 'criminal',
    civil = 'civil',
    pequenas_causas ='pequenas causas'
  }

export class UpdateProcessDto{
    @IsEnum(Tipo)
    @IsOptional()   
    @ApiProperty({enum:['criminal','civil','pequenas causas']})
    typy_action:Tipo;
    
    @IsOptional()
    @ApiProperty()
    accused_party:string;
    
    @IsOptional()
    @ApiProperty()
    accuse_part:string;
    
    @IsOptional()
    @ApiProperty()
    process_text:string;
}