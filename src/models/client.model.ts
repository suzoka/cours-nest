import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class ClientEntity {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  adresse: string;

  @Column()
  phone?: string;

  @Column()
  birthDate: Date;
}