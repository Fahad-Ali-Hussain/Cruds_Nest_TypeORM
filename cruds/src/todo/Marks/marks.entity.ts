import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "../Student/student.entity";

@Entity()
export class Marks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Marks: number;

    @Column()
    CGPA: number;


    @ManyToMany(() => Student, (student) => student.marks)
    student: Student[];
}