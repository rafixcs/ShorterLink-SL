import { Module } from '@nestjs/common';
import { RedirectController } from './redirect.controller';
import { RedirectService } from './redirect.service';
import { ShoterLinkModule } from 'src/shorter-link/shorter-link.module';
import { ShoterLinkService } from 'src/shorter-link/shorter-link.service';
import { ShorterLinkSchema } from 'src/shorter-link/schemas/shorter-link.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    controllers: [RedirectController],
    providers: [RedirectService, ShoterLinkService],
    imports: [
        ShoterLinkModule,
        MongooseModule.forFeature([{
            name: 'ShorterLink', schema: ShorterLinkSchema
          }]),
        ]
})
export class RedirectModule {}
