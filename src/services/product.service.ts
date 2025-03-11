import { Injectable } from '@nestjs/common';
import { IProductDTO } from 'src/dto/product.dto';

@Injectable()
export default class ProductService {
  createProduct(product: IProductDTO): IProductDTO {
    const myProduct: IProductDTO = {
      ...product
    }

    myProduct.id = "coucou"
    return myProduct;  
  }
}
