import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1728513889694 implements MigrationInterface {
    name = 'Migrations1728513889694'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "FK_07f5f90c658bb49bd8f37363c4c"
        `);
        await queryRunner.query(`
            ALTER TABLE "especialidade" DROP CONSTRAINT "PK_3f671891c0d720a785a77be31d2"
        `);
        await queryRunner.query(`
            ALTER TABLE "especialidade" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "especialidade"
            ADD "id" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "especialidade"
            ADD CONSTRAINT "PK_3f671891c0d720a785a77be31d2" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "PK_95adaf38d73b1d4f75faa2f4a7d"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "PK_814b419c8d2aeeba065de923546" PRIMARY KEY ("clinicaId")
        `);
        await queryRunner.query(`
            DROP INDEX "public"."IDX_07f5f90c658bb49bd8f37363c4"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP COLUMN "especialidadeId"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD "especialidadeId" uuid NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "PK_814b419c8d2aeeba065de923546"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "PK_95adaf38d73b1d4f75faa2f4a7d" PRIMARY KEY ("clinicaId", "especialidadeId")
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_07f5f90c658bb49bd8f37363c4" ON "clinica_especialidades" ("especialidadeId")
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
            DROP INDEX "public"."IDX_07f5f90c658bb49bd8f37363c4"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "PK_95adaf38d73b1d4f75faa2f4a7d"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "PK_814b419c8d2aeeba065de923546" PRIMARY KEY ("clinicaId")
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP COLUMN "especialidadeId"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD "especialidadeId" integer NOT NULL
        `);
        await queryRunner.query(`
            CREATE INDEX "IDX_07f5f90c658bb49bd8f37363c4" ON "clinica_especialidades" ("especialidadeId")
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "PK_814b419c8d2aeeba065de923546"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "PK_95adaf38d73b1d4f75faa2f4a7d" PRIMARY KEY ("clinicaId", "especialidadeId")
        `);
        await queryRunner.query(`
            ALTER TABLE "especialidade" DROP CONSTRAINT "PK_3f671891c0d720a785a77be31d2"
        `);
        await queryRunner.query(`
            ALTER TABLE "especialidade" DROP COLUMN "id"
        `);
        await queryRunner.query(`
            ALTER TABLE "especialidade"
            ADD "id" SERIAL NOT NULL
        `);
        await queryRunner.query(`
            ALTER TABLE "especialidade"
            ADD CONSTRAINT "PK_3f671891c0d720a785a77be31d2" PRIMARY KEY ("id")
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "FK_07f5f90c658bb49bd8f37363c4c" FOREIGN KEY ("especialidadeId") REFERENCES "especialidade"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
