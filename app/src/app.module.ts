import { Module } from '@nestjs/common';
import { ShoterLinkModule } from './shorter-link/shorter-link.module';
import { RedirectModule } from './redirect/redirect.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ShoterLinkModule, 
    RedirectModule,
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
})
export class AppModule {}
