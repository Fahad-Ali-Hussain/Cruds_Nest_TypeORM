import { dot } from "node:test/reporters";
import { CreatTodoDto } from "../dto/create-todo.dto";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller('student')
export class StudentController {
    constructor(private readonly studentservice: StudentService){ }

    @Post()
    create(@Body() dto: CreatTodoDto) {
        return this.studentservice.create(dto)
    }

    @Get()
    Find() {
        return this.studentservice.findAll()
    }

//     @Put(':id')
//     Update(@Param('id') id: number, @Body() dto: CreatTodoDto) {
//         return this.studentservice.Update(id,dto);
//     }

//     @Delete(':id')
//     delete(@Param('id') id: number) {
//         return this.studentservice.delete(id);
//     }
 }