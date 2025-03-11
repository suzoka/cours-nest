import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<SellerEntity>;

@Schema()
export class SellerEntity {

    @Prop()
    id: string;

    @Prop()
    contactName: string;

    @Prop()
    email: string;

    @Prop()
    adresse: string;

    @Prop()
    phone: string;

    @Prop()
    companyName: string;

    @Prop()
    siret: string;

    @Prop()
    productType: string;
}

export const SellerSchema = SchemaFactory.createForClass(SellerEntity);