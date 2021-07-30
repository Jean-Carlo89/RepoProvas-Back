import {MigrationInterface, QueryRunner} from "typeorm";

export class createDB1627654184216 implements MigrationInterface {
    name = 'createDB1627654184216'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "disciplines" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9b25ea6da0741577a73c9e90aad" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "exams" ("id" SERIAL NOT NULL, "year" character varying NOT NULL, "semester" character varying NOT NULL, "disciplineId" integer, "categoryId" integer, "professorId" integer, CONSTRAINT "REL_bcfdfcbfb5fe82b98eb79ac581" UNIQUE ("professorId"), CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "period" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_cabecec858892ab647cd28673b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "professors_discplines_disciplines" ("professorsId" integer NOT NULL, "disciplinesId" integer NOT NULL, CONSTRAINT "PK_0e5f7769559591a837908b11875" PRIMARY KEY ("professorsId", "disciplinesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a160216b4432ba81f77fb7cb49" ON "professors_discplines_disciplines" ("professorsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_b875018c8e76ae91fda1e4b6ea" ON "professors_discplines_disciplines" ("disciplinesId") `);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_448fb069febfdb9e6a519121aab" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "exams" ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES "professors"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "professors_discplines_disciplines" ADD CONSTRAINT "FK_a160216b4432ba81f77fb7cb496" FOREIGN KEY ("professorsId") REFERENCES "professors"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "professors_discplines_disciplines" ADD CONSTRAINT "FK_b875018c8e76ae91fda1e4b6eaa" FOREIGN KEY ("disciplinesId") REFERENCES "disciplines"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "professors_discplines_disciplines" DROP CONSTRAINT "FK_b875018c8e76ae91fda1e4b6eaa"`);
        await queryRunner.query(`ALTER TABLE "professors_discplines_disciplines" DROP CONSTRAINT "FK_a160216b4432ba81f77fb7cb496"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3"`);
        await queryRunner.query(`ALTER TABLE "exams" DROP CONSTRAINT "FK_448fb069febfdb9e6a519121aab"`);
        await queryRunner.query(`DROP INDEX "IDX_b875018c8e76ae91fda1e4b6ea"`);
        await queryRunner.query(`DROP INDEX "IDX_a160216b4432ba81f77fb7cb49"`);
        await queryRunner.query(`DROP TABLE "professors_discplines_disciplines"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "period"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "exams"`);
        await queryRunner.query(`DROP TABLE "professors"`);
        await queryRunner.query(`DROP TABLE "disciplines"`);
    }

}
