import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marks } from './marks.entity';
import { CreatTodoDto } from '../dto/create-todo.dto';

@Injectable()
export class MarksService {
    constructor(@InjectRepository(Marks) private readonly marksrepository: Repository<Marks>) { }

    async create(dto: CreatTodoDto) {
        const todo = this.marksrepository.create(dto);
        return await this.marksrepository.save(todo);

    }

    findAll() {
        return this.marksrepository.query(`SELECT * FROM marks INNER JOIN student ON marks.id = student.S_id`);
    }

    async Update(id: number, dto: CreatTodoDto) {
        const todo = await this.marksrepository.findOne({ where: { id } });
        Object.assign(todo, dto);
        return await this.marksrepository.save(todo);
    }

    async delete(id: number) {
        const todo = await this.marksrepository.findOne({ where: { id } });
        return await this.marksrepository.remove(todo);
    }

}