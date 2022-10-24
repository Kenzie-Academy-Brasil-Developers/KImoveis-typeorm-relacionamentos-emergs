import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableSchedule1666197065190 implements MigrationInterface {
    name = 'createTableSchedule1666197065190'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedule_user_properties" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "date" integer NOT NULL, "hour" integer NOT NULL, "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_92b9b746e8fba52f49d346fa835" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" ADD CONSTRAINT "FK_e477870222a85a7c00edbc7f0ba" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" ADD CONSTRAINT "FK_715c0ab7e60dca9b38ccb2585c6" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" DROP CONSTRAINT "FK_715c0ab7e60dca9b38ccb2585c6"`);
        await queryRunner.query(`ALTER TABLE "schedule_user_properties" DROP CONSTRAINT "FK_e477870222a85a7c00edbc7f0ba"`);
        await queryRunner.query(`DROP TABLE "schedule_user_properties"`);
    }

}
