import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import Models from './models';
import Services from './services';
import ProductController from './controllers/product.controller';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017')
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
