import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<ClientEntity>;

@Schema()
export class ClientEntity {

    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    adresse: string;

    @Prop()
    phone?: string;

    @Prop()
    birthDate: Date;
}

export const ClientSchema = SchemaFactory.createForClass(ClientEntity);
