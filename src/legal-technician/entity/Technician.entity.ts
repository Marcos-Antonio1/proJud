import { ProcessEntity } from "src/process/entity/process.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, BeforeInsert} from "typeorm";
import * as  bcrypt from 'bcrypt';

@Entity({name:'technician'})
export class TechnicianEntity  {
    @PrimaryGeneratedColumn()
    registration:string;
    @Column()
    name:string;
    @Column({unique:true})
    email:string;
    @Column()
    password:string;
    @UpdateDateColumn()
    updatedAt:string;
    @CreateDateColumn()
    createAt:string;

    @OneToMany(() => ProcessEntity, process => process.tecCreate)
    process:ProcessEntity[];

    @OneToMany(() => ProcessEntity, processEdited => processEdited.tecLastEdit)
    processEdited:ProcessEntity[];

    @BeforeInsert()
    async hashPassword(){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password,salt)
    }
}