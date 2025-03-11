import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'; import { IOrderDTO } from "../dto/order.dto"
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<OrderEntity>;

@Schema()
export class OrderEntity {

    @Prop()
    id: string;

    @Prop()
    creationDate: Date;

    @Prop()
    invoiceId: string;

    @Prop()
    clientId: string;

    @Prop()
    status: string;

    @Prop()
    products: Array<IOrderDTO>;
}

export const OrderSchema = SchemaFactory.createForClass(OrderEntity);
