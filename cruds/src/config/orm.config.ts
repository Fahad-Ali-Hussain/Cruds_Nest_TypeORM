
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSource, Migration } from 'typeorm'
import * as dotenv from 'dotenv';
import { Student } from "src/todo/Student/student.entity";
import { Marks } from "src/todo/Marks/marks.entity";
dotenv.config();

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
    username: process.env.USER_NAME,
    database: process.env.DBNAME,
    password: process.env.PASSWORD,
    synchronize: true,
    autoLoadEntities: true,
}

export const OrmConfig = {
    migrations: ["cruds/src/config/1698314833693-teachers.ts"],
    cli: {
        "migrationsDir": "cruds/src/config/1698314833693-teachers.ts"
    },
    //migrationsRun: true,
    
};

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
    username: process.env.USER_NAME,
    database: process.env.DBNAME,
    password: process.env.PASSWORD,
    synchronize: false,

    
    
})

export default OrmConfig;