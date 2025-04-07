import { Body, Param, Controller, Delete, HttpCode, Put, Get } from '@nestjs/common';
import { IProductDTO } from 'src/dto/product.dto';
import ProductService from 'src/services/product.service';

@Controller('/products')
export default class ProductController {
    constructor(
        private readonly productService: ProductService
    ) { }

    @Put()
    @HttpCode(201)
    createProduct(
        @Body() requestProduct: IProductDTO
    ): Promise<IProductDTO> {
        return this.productService.createProduct(requestProduct);
    }

    @Delete(':id')
    deleteProduct(
        @Param('id') productId: string
    ): Promise<IProductDTO | null> {
        return this.productService.deleteProduct(productId);
    }

    @Put(':id')
    updateProduct(
        @Body() updatedFields: IProductDTO,
        @Param('id') productId: string
    ): Promise <IProductDTO | null> {
        return this.productService.updateProduct(productId, updatedFields)
    }

    @Get(':id')
    getProduct(
        @Param('id') productId: string
    ): Promise<IProductDTO | null> {
        return this.productService.getProduct(productId);
    }
}
