import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class ProductEntity {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  quantity: Number;

  @Column()
  price: Number;

  @Column()
  tax: Number;

  @Column()
  description?: string;

  @Column()
  minimumAge?: Number;
}