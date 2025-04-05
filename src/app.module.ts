import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import Models from './models';
import Services from './services';
import ProductController from './controllers/product.controller';
import { ProductEntity, ProductSchema } from './models/product.model';
@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017'),
        MongooseModule.forFeature([{ name: ProductEntity.name, schema: ProductSchema }]),
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
