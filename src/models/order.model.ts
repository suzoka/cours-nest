import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { IOrderDTO } from "../dto/order.dto"

@Entity()
export class OrderEntity {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  creationDate: Date;

  @Column()
  invoiceId: string;

  @Column()
  clientId: string;

  @Column()
  status: string;

  @Column()
  products: Array<IOrderDTO>;
}