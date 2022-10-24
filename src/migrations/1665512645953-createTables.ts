import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1665512645953 implements MigrationInterface {
    name = 'createTables1665512645953'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL, "nome" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, "password" character varying NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
