import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1728514171475 implements MigrationInterface {
    name = 'Migrations1728514171475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "documento"
            ALTER COLUMN "id" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "documento" DROP CONSTRAINT "FK_f1900786c4203841bec15fd1082"
        `);
        await queryRunner.query(`
            ALTER TABLE "medcard"
            ALTER COLUMN "id" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "FK_814b419c8d2aeeba065de923546"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica"
            ALTER COLUMN "id" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "documento"
            ADD CONSTRAINT "FK_f1900786c4203841bec15fd1082" FOREIGN KEY ("medCardId") REFERENCES "medcard"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "FK_814b419c8d2aeeba065de923546" FOREIGN KEY ("clinicaId") REFERENCES "clinica"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades" DROP CONSTRAINT "FK_814b419c8d2aeeba065de923546"
        `);
        await queryRunner.query(`
            ALTER TABLE "documento" DROP CONSTRAINT "FK_f1900786c4203841bec15fd1082"
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica"
            ALTER COLUMN "id"
            SET DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "clinica_especialidades"
            ADD CONSTRAINT "FK_814b419c8d2aeeba065de923546" FOREIGN KEY ("clinicaId") REFERENCES "clinica"("id") ON DELETE CASCADE ON UPDATE CASCADE
        `);
        await queryRunner.query(`
            ALTER TABLE "medcard"
            ALTER COLUMN "id"
            SET DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "documento"
            ADD CONSTRAINT "FK_f1900786c4203841bec15fd1082" FOREIGN KEY ("medCardId") REFERENCES "medcard"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "documento"
            ALTER COLUMN "id"
            SET DEFAULT uuid_generate_v4()
        `);
    }

}
