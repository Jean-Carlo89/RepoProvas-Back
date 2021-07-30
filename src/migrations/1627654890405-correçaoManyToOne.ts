import {MigrationInterface, QueryRunner} from "typeorm";

export class correçaoManyToOne1627654890405 implements MigrationInterface {
    name = 'correçaoManyToOne1627654890405'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "disciplines" ADD "periodId" integer`);
        await queryRunner.query(`ALTER TABLE "disciplines" ADD CONSTRAINT "FK_54c5bc5f3518061669996b2c72e" FOREIGN KEY ("periodId") REFERENCES "period"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "disciplines" DROP CONSTRAINT "FK_54c5bc5f3518061669996b2c72e"`);
        await queryRunner.query(`ALTER TABLE "disciplines" DROP COLUMN "periodId"`);
    }

}
