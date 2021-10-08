import { TechnicianEntity } from "src/legal-technician/entity/Technician.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

type Tipo = 'criminal'|'civil'|'pequenas causas';

@Entity({name:'process'})
export class ProcessEntity {
    @PrimaryGeneratedColumn()
    number_process:string;
    @Column({type:'enum',enum:['criminal','civil','pequenas causas']})
    typy_action:Tipo;
    @Column()
    accused_party:string;
    @Column()
    accuse_part:string;
    @Column()
    process_text:string;

    @Column({nullable:true})
    updateAt:Date
    
    @ManyToOne(() => TechnicianEntity, tecCreate => tecCreate.process)
    tecCreate: TechnicianEntity; 

    @ManyToOne(() => TechnicianEntity, tecLastEdit => tecLastEdit.processEdited)
    tecLastEdit: TechnicianEntity; 

    @OneToOne(() => TechnicianEntity)
    @JoinColumn()
    tecEditing: TechnicianEntity;
    
    

    
}