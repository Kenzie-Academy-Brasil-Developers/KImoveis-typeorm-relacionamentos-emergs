import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1666982824883 implements MigrationInterface {
    name = 'createTable1666982824883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" DROP CONSTRAINT "FK_e477870222a85a7c00edbc7f0ba"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" RENAME COLUMN "propertyId" TO "propertiesId"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" ADD CONSTRAINT "FK_a0f8c1b58b478e637b40683db26" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" DROP CONSTRAINT "FK_a0f8c1b58b478e637b40683db26"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" RENAME COLUMN "propertiesId" TO "propertyId"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" ADD CONSTRAINT "FK_e477870222a85a7c00edbc7f0ba" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
