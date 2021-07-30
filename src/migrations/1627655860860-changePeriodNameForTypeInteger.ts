import {MigrationInterface, QueryRunner} from "typeorm";

export class changePeriodNameForTypeInteger1627655860860 implements MigrationInterface {
    name = 'changePeriodNameForTypeInteger1627655860860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "period" RENAME COLUMN "type" TO "name"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "semester"`);
        await queryRunner.query(`ALTER TABLE "period" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "period" ADD "name" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "period" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "period" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "exams" ADD "semester" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "period" RENAME COLUMN "name" TO "type"`);
    }

}
