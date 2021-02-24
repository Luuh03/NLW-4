import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1614102366362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Aqui no método UP vai o que deve ser criado/dar um up na migration
        
        // Neste comando estamos criando uma tabela com o nome de "users", que possui as colunas id, name, email e created_at
        // (a created_at tem como default "now()" para salvar o momento em que um objeto é salvo nessa tabela)
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // E aqui no método DOWN vai o que deve ser excluído/remover a migration

        // Aqui estamos apagando a tabela "users"
        await queryRunner.dropTable("users");

    }

}
