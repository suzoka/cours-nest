import { Injectable, NotFoundException } from '@nestjs/common';
import { IProductDTO } from 'src/dto/product.dto';
import ProductModel from 'src/models/product.model';

@Injectable()
export default class ProductService {

    constructor(
        private readonly productModel: ProductModel
    ) { }

    async createProduct(product: IProductDTO): Promise<IProductDTO> {
        const myProduct: IProductDTO = {
            ...product
        }

        // Toutes nos vérifications métiers

        return this.productModel.createProduct(myProduct);
    }

    async deleteProduct(productId: string): Promise<IProductDTO | null> {
        const result = await this.productModel.deleteProduct(productId);

        if (result) {
            return result
        }

        throw new NotFoundException(`Product with ID ${productId} not found`);
    }

    async updateProduct(productId: string, updatedFields: IProductDTO): Promise<IProductDTO | null> {

        // const updatedFieldsFiltered: IProductDTO = {
        //     ...updatedFields,
        //     category: undefined
        // }
        // Point de vue sur l'exclusion des champs non voulus

        const updatedFieldsFiltered: IProductDTO = Object.entries(updatedFields)
            .filter(([k,]: Array<string>) => ['name', 'description'].includes(k.trim().toLowerCase()))
            .reduce((acc, [k, v]: Array<string>) => ({ ...acc, [k]: v }), {} as IProductDTO);
        // Point de vue sur l'inclusion stricte des champs acceptés (Meilleur pour la sécurité)

        const result = await this.productModel.updateProduct(productId, updatedFieldsFiltered);

        if (result) {
            return result
        }

        throw new NotFoundException(`Product with ID ${productId} not found`);
    }

    async getProduct(productId: string): Promise<IProductDTO | null> {
        return this.productModel.getProduct(productId);
    }
}
