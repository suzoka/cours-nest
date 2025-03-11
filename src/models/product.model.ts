import { Injectable } from "@nestjs/common";
import { IProductDTO } from "src/dto/product.dto";
import { Entity, PrimaryGeneratedColumn, Column, DataSource } from "typeorm"

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

@Injectable()
export default class ProductModel {
    constructor(private readonly dataSource: DataSource) {}

    async createProduct(product: IProductDTO): Promise<IProductDTO> {
        return Promise.resolve( product ) ;
    }

}