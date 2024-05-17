import { Module } from '@nestjs/common';
import { ShoterLinkService } from './shorter-link.service';
import { ShoterLinkController } from './shorter-link.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShorterLinkSchema } from './schemas/shorter-link.schema';

@Module({
  providers: [ShoterLinkService],
  controllers: [ShoterLinkController],
  imports: [
    MongooseModule.forFeature([{
      name: 'ShorterLink', schema: ShorterLinkSchema
    }])
  ]
})
export class ShoterLinkModule {}
