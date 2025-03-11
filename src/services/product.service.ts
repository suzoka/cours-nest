import { Injectable } from '@nestjs/common';
import { IProductDTO } from 'src/dto/product.dto';
import ProductModel from 'src/models/product.model';

@Injectable()
export default class ProductService {

    constructor(
        private readonly productModel: ProductModel 
    ){}

    async createProduct(product: IProductDTO): Promise<IProductDTO> {
        const myProduct: IProductDTO = {
            ...product
        }

        // Toutes nos vérifications métiers

        return this.productModel.createProduct( myProduct ) ;
    }
}
