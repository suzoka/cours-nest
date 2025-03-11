import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class SellerEntity {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  contactName: string;

  @Column()
  email: string;

  @Column()
  adresse: string;

  @Column()
  phone: string;

  @Column()
  companyName: string;

  @Column()
  siret: string;

  @Column()
  productType: string;
}