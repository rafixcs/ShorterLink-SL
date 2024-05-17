import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"

export type ShorterLinkDocument = HydratedDocument<ShorterLink>;

@Schema()
export class ShorterLink {
    @Prop({ required: true })
    url: string;

    @Prop({ required: true })
    shortid: string;

    @Prop({ required: true })
    creationDate: Date;
}

export const ShorterLinkSchema = SchemaFactory.createForClass(ShorterLink)
