import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1728429172387 implements MigrationInterface {
    name = 'Migrations1728429172387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "especialidade" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_3f671891c0d720a785a77be31d2" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "clinica" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "telephone" character varying NOT NULL,
                "description" character varying,
                "address" json NOT NULL,
                "email" character varying NOT NULL,
                "cnpj" character varying NOT NULL,
                "instagram" character varying,
                CONSTRAINT "PK_a5868356fca535972d7aa945704" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "documento" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "type" character varying NOT NULL,
                "tamanho" integer NOT NULL,
                "userId" uuid,
                "medCardId" uuid,
                CONSTRAINT "PK_14a00534ba5a1136f420342c965" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "medcard" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "status" boolean NOT NULL,
                "userId" uuid,
                CONSTRAINT "REL_fb04f75d3718205eb37407457b" UNIQUE ("userId"),
                CONSTRAINT "PK_4f782c6f23577a04f8eec8b52c8" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "clinica_especialidades" (
                "clinicaId" uuid NOT NULL,
                "especialidadeId" integer NOT NULL,
                CONSTRAINT "PK_95adaf38d73b1d4f75faa2f4a7d" PRIMARY KEY ("clinicaId", "especialidadeId")
            )
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_814b419c8d2aeeba065de92354" ON "clinica_especialidades" ("clinicaId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_07f5f90c658bb49bd8f37363c4" ON "clinica_especialidades" ("especialidadeId")
        `);
        await queryRunner.query(`
            ALTER TABLE "documento"
            ADD CONSTRAINT "FK_467b259d33be6c1e5994114b02c" FOREIGN KEY ("userId") REFERENCES "user_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "documento"
            ADD CONSTRAINT "FK_f1900786c4203841bec15fd1082" FOREIGN KEY ("medCardId") REFERENCES "medcard"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "medcard"
            ADD CONSTRAINT "FK_fb04f75d3718205eb37407457b8" FOREIGN KEY ("userId") REFERENCES "user_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "FK_814b419c8d2aeeba065de923546" FOREIGN KEY ("clinicaId") REFERENCES "clinica"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "FK_07f5f90c658bb49bd8f37363c4c" FOREIGN KEY ("especialidadeId") REFERENCES "especialidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "FK_07f5f90c658bb49bd8f37363c4c"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "FK_814b419c8d2aeeba065de923546"
        `);
        await queryRunner.query(`
            ALTER TABLE "medcard" DROP CONSTRAINT "FK_fb04f75d3718205eb37407457b8"
        `);
        await queryRunner.query(`
            ALTER TABLE "documento" DROP CONSTRAINT "FK_f1900786c4203841bec15fd1082"
        `);
        await queryRunner.query(`
            ALTER TABLE "documento" DROP CONSTRAINT "FK_467b259d33be6c1e5994114b02c"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_07f5f90c658bb49bd8f37363c4"
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_814b419c8d2aeeba065de92354"
        `);
        await queryRunner.query(`
            DROP TABLE "clinica_especialidades"
        `);
        await queryRunner.query(`
            DROP TABLE "medcard"
        `);
        await queryRunner.query(`
            DROP TABLE "documento"
        `);
        await queryRunner.query(`
            DROP TABLE "clinica"
        `);
        await queryRunner.query(`
            DROP TABLE "especialidade"
        `);
    }

}
