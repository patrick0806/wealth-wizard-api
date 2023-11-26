import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateExpenseTable1701020371700 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE expenses (
        id uuid NOT NULL DEFAULT uuid_generate_v4(),
        description VARCHAR(50),
        origin VARCHAR(30),
        installments INTEGER,
        installment_value NUMERIC(10,2),
        total_value NUMERIC(10,2),
        initial_date DATE, 
        finish_date DATE,
        created_at TIMESTAMP NOT NULL DEFAULT now(),
        updated_at TIMESTAMP NOT NULL DEFAULT now()       
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE expenses;`);
  }
}
