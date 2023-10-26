import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Marks } from "../Marks/marks.entity";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    S_id: number;

    @Column()
    Name: string;

    @Column()
    Class: string;

    @OneToMany(() => Marks, (marks) => marks.student)
    marks: Marks;
}
