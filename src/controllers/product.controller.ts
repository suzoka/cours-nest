import { Body, Controller, Get, HttpCode, Put } from '@nestjs/common';
import { AppService } from '../services/app.service'
import { IProductDTO } from 'src/dto/product.dto';
import ProductService from 'src/services/product.service';

@Controller('/products')
export class ProductController {
  constructor(
    private readonly appService: AppService,
    private readonly productService: ProductService
  ) {}

  @Put()
  @HttpCode(201)
  createProduct(
    @Body() requestProduct: IProductDTO
  ): IProductDTO {
    return this.productService.createProduct(requestProduct);
  }
}
