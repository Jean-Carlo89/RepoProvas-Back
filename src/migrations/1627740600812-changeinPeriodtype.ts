import {MigrationInterface, QueryRunner} from "typeorm";

export class changeinPeriodtype1627740600812 implements MigrationInterface {
    name = 'changeinPeriodtype1627740600812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" DROP CONSTRAINT "FK_a160216b4432ba81f77fb7cb496"`);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" DROP CONSTRAINT "FK_b875018c8e76ae91fda1e4b6eaa"`);
        await queryRunner.query(`DROP INDEX "IDX_a160216b4432ba81f77fb7cb49"`);
        await queryRunner.query(`DROP INDEX "IDX_b875018c8e76ae91fda1e4b6ea"`);
        await queryRunner.query(`ALTER TABLE "period" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "period" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_50741382558c664bc173f4aec4" ON "professors_disciplines_disciplines" ("professorsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_716dc93014b1ffc2a7ef23d5d3" ON "professors_disciplines_disciplines" ("disciplinesId") `);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" ADD CONSTRAINT "FK_50741382558c664bc173f4aec44" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" ADD CONSTRAINT "FK_716dc93014b1ffc2a7ef23d5d36" FOREIGN KEY ("disciplinesId") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" DROP CONSTRAINT "FK_716dc93014b1ffc2a7ef23d5d36"`);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" DROP CONSTRAINT "FK_50741382558c664bc173f4aec44"`);
        await queryRunner.query(`DROP INDEX "IDX_716dc93014b1ffc2a7ef23d5d3"`);
        await queryRunner.query(`DROP INDEX "IDX_50741382558c664bc173f4aec4"`);
        await queryRunner.query(`ALTER TABLE "period" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "period" ADD "name" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_b875018c8e76ae91fda1e4b6ea" ON "professors_disciplines_disciplines" ("disciplinesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a160216b4432ba81f77fb7cb49" ON "professors_disciplines_disciplines" ("professorsId") `);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" ADD CONSTRAINT "FK_b875018c8e76ae91fda1e4b6eaa" FOREIGN KEY ("disciplinesId") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "professors_disciplines_disciplines" ADD CONSTRAINT "FK_a160216b4432ba81f77fb7cb496" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}
