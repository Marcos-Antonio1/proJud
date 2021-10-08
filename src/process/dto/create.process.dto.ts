import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty,IsEnum } from "class-validator";
export enum Tipo {
    criminal = 'criminal',
    civil = 'civil',
    pequenas_causas ='pequenas causas'
  }
export class CreateProcessDto{    

    @IsEnum(Tipo)
    @IsNotEmpty()
    @ApiProperty({enum:['criminal','civil','pequenas causas']})
    typy_action:Tipo;
    
    @IsNotEmpty()
    @ApiProperty()
    accused_party:string;
    
    @IsNotEmpty()
    @ApiProperty()
    accuse_part:string;
    
    @IsNotEmpty()
    @ApiProperty()
    process_text:string;
}