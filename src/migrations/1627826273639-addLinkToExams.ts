import {MigrationInterface, QueryRunner} from "typeorm";

export class addLinkToExams1627826273639 implements MigrationInterface {
    name = 'addLinkToExams1627826273639'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" ADD "urlLink" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "urlLink"`);
    }

}
