import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({name: 'name', nullable: false})
    name: string;


    @Column({name: 'email', nullable: false})
    email: string;

    @Column({name: 'phone' })
    phone: string;


    @Column({name: 'cpf' ,nullable: false})
    cpf: string;

    @Column({name: 'password', nullable: false})
    password: string;

    @Column({name: 'type_user', nullable: false, default: 1})
    type_user: number;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date;
}
