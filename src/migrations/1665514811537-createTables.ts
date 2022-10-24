import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1665514811537 implements MigrationInterface {
    name = 'createTables1665514811537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "nome" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "name" TO "nome"`);
    }

}
