import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marks } from './marks.entity';
import { MarksService } from './marks.service';
import { MarksController } from './marks.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Marks])
    ],
    controllers: [MarksController],
    providers: [MarksService],
})
export class MarksModule { }
