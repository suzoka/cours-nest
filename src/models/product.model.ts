import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { IProductDTO } from "src/dto/product.dto";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, Error } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export type ProductDocument = HydratedDocument<ProductEntity>;

@Schema()
export class ProductEntity {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    tax: number;

    @Prop()
    description?: string;

    @Prop()
    minimumAge?: number;

    @Prop()
    category: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);

@Injectable()
export default class ProductModel {
    constructor(
        @InjectModel(ProductEntity.name) private productModel: Model<ProductDocument>
    ) {}

    async createProduct(product: IProductDTO): Promise<IProductDTO> {
        try {
            const createdProduct = new this.productModel(product);
            return createdProduct.save();
        } catch (error) {
            throw new Error(`Failed to create product: ${error.message}`);
        }
    }

    async deleteProduct(productId: string): Promise<IProductDTO | null> {
        try {
            const product =  await this.productModel.findOneAndDelete({ _id: productId }).exec();
            return product 
        } catch (error) {
            if (error instanceof Error.CastError){
                throw new BadRequestException
            }
            throw InternalServerErrorException;
        }
    }

    async updateProduct(productId: string, updatedFields: IProductDTO): Promise<IProductDTO | null> {
        try {
            const product = await this.productModel.findOneAndUpdate({_id: productId}, updatedFields, {new: true} )
            return product
        } catch (error) {
            if (error instanceof Error.CastError){
                throw new BadRequestException
            }
            throw InternalServerErrorException;
        }
    }

    async getProduct(productId: string): Promise<IProductDTO | null> {
        try {
            const product = await this.productModel.findById(productId)

            if (!product) {
                throw new NotFoundException
            }

            return product
        } catch (error) {
            if (error instanceof Error.CastError){
                throw new BadRequestException
            }

            if (error instanceof NotFoundException) {
                throw new NotFoundException
            }

            throw InternalServerErrorException;
        }
    }
}