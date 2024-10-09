import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1728515603928 implements MigrationInterface {
    name = 'Migrations1728515603928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "medcard" DROP CONSTRAINT "FK_fb04f75d3718205eb37407457b8"
        `);
        await queryRunner.query(`
            ALTER TABLE "documento" DROP CONSTRAINT "FK_467b259d33be6c1e5994114b02c"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_model"
            ALTER COLUMN "id" DROP DEFAULT
        `);
        await queryRunner.query(`
            ALTER TABLE "medcard"
            ADD CONSTRAINT "FK_fb04f75d3718205eb37407457b8" FOREIGN KEY ("userId") REFERENCES "user_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "documento"
            ADD CONSTRAINT "FK_467b259d33be6c1e5994114b02c" FOREIGN KEY ("userId") REFERENCES "user_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "documento" DROP CONSTRAINT "FK_467b259d33be6c1e5994114b02c"
        `);
        await queryRunner.query(`
            ALTER TABLE "medcard" DROP CONSTRAINT "FK_fb04f75d3718205eb37407457b8"
        `);
        await queryRunner.query(`
            ALTER TABLE "user_model"
            ALTER COLUMN "id"
            SET DEFAULT uuid_generate_v4()
        `);
        await queryRunner.query(`
            ALTER TABLE "documento"
            ADD CONSTRAINT "FK_467b259d33be6c1e5994114b02c" FOREIGN KEY ("userId") REFERENCES "user_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
        await queryRunner.query(`
            ALTER TABLE "medcard"
            ADD CONSTRAINT "FK_fb04f75d3718205eb37407457b8" FOREIGN KEY ("userId") REFERENCES "user_model"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

}
