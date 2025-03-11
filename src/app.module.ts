import { Module } from '@nestjs/common';
import Models from './models';
import Services from './services';
import ProductController from './controllers/product.controller';

@Module({
    imports: [
    ],
    controllers: [
        ProductController
    ],
    providers: [
        ...Models,
        ...Services
    ],
})
export class AppModule { }
