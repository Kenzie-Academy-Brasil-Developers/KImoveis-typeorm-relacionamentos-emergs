import { MigrationInterface, QueryRunner } from "typeorm";

export class createTableCategorieseProperties1666113970483 implements MigrationInterface {
    name = 'createTableCategorieseProperties1666113970483'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_26a719ca228cd83b596b68bb3ca"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_ca9977669df4807ef2202584495"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "REL_26a719ca228cd83b596b68bb3c"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "addressesId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "UQ_2b2211958ef1f0e3c680339100e" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoryId"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "UQ_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoriesId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "addressesId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "REL_26a719ca228cd83b596b68bb3c" UNIQUE ("addressesId")`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_ca9977669df4807ef2202584495" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_26a719ca228cd83b596b68bb3ca" FOREIGN KEY ("addressesId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
