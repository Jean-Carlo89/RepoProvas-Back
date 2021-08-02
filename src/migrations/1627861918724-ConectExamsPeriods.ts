import {MigrationInterface, QueryRunner} from "typeorm";

export class ConectExamsPeriods1627861918724 implements MigrationInterface {
    name = 'ConectExamsPeriods1627861918724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" ADD "periodId" integer`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_34c9ebc0f72b74d689d378382a5" FOREIGN KEY ("periodId") REFERENCES "period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_34c9ebc0f72b74d689d378382a5"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP COLUMN "periodId"`);
    }

}
