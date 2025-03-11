import { Injectable } from "@nestjs/common";
import { IProductDTO } from "src/dto/product.dto";
import { Prop, Schema, SchemaFactory, InjectConnection } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Connection } from 'mongoose';

export type ProductDocument = HydratedDocument<ProductEntity>;

@Schema()
export class ProductEntity {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    quantity: Number;

    @Prop()
    price: Number;

    @Prop()
    tax: Number;

    @Prop()
    description?: string;

    @Prop()
    minimumAge?: Number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);

@Injectable()
export default class ProductModel {
    constructor(@InjectConnection() private connection: Connection) {}

    async createProduct(product: IProductDTO): Promise<IProductDTO> {
        const shema = new ProductSchema(product)
        return shema.save();
    }
}