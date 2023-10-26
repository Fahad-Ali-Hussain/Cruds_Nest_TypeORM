import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatTodoDto } from '../dto/create-todo.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Student) private readonly studentrepository: Repository<Student>) { }

    async create(dto: CreatTodoDto) {
        const todo = this.studentrepository.create(dto);
        return await this.studentrepository.save(todo);

    }

    findAll() {
        return this.studentrepository.find();
    }

    async Update(S_id: number, dto: CreatTodoDto) {
        const todos = await this.studentrepository.findOne({ where: { S_id } });
        Object.assign(todos, dto);
        return await this.studentrepository.save(todos);
    }

    async delete(S_id: number) {
        const todo = await this.studentrepository.findOne({ where: { S_id } });
        return await this.studentrepository.remove(todo);
    }

}