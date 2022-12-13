import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Info {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    creator: string

    @Column()
    name: string

    @Column()
    description: string

}
