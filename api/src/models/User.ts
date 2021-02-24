import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';

// Define que a classe será uma entidade
// o "users" vem da tabela que está nas migrations
@Entity("users")
class User {

  // Define a coluna id como uma chave primária
  @PrimaryColumn()
  readonly id: string;

  // Define name como uma coluna
  @Column()
  name: string;

  @Column()
  email: string;

  // Assim ja faz a inserção dos valores pra gente
  @CreateDateColumn()
  created_At: Date

  constructor() {
    if(!this.id){
      this.id = uuid()
    }
  }
}

export { User }