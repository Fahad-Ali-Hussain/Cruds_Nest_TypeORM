import { CreatTodoDto } from "../dto/create-todo.dto";
import { MarksService } from "./marks.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('marks')
export class MarksController {
    constructor(private readonly marksservice: MarksService) { }

    @Post()
    create(@Body() dto: CreatTodoDto) {
        return this.marksservice.create(dto)
    }

    @Get()
    Find() {
        return this.marksservice.findAll()
    }

    @Put(':id')
    Update(@Param('id') id: number, @Body() dto: CreatTodoDto) {
        return this.marksservice.Update(id,dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.marksservice.delete(id);
    }
}