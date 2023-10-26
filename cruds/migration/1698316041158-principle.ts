import { Table } from "typeorm";
import { MigrationInterface, QueryRunner } from "typeorm"

export class Principle1698316041158 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "username",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "password",
                    type: "varchar",
                    length: "255",
                },

            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
