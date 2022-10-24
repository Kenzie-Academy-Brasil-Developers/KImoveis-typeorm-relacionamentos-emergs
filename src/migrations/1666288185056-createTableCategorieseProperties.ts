import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableCategorieseProperties1666288185056 implements MigrationInterface {
    name = 'createTableCategorieseProperties1666288185056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" ADD "date" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" ADD "hour" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" DROP COLUMN "hour"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" ADD "hour" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" ADD "date" integer NOT NULL`);
    }

}
