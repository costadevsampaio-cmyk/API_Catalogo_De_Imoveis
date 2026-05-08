import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaModule } from './prisma/prisma.module';

import { ImovelModule } from './modules/imovel/imovel.module';
import { EnderecoModule } from './modules/endereco/endereco.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    PrismaModule,

    ImovelModule,
    EnderecoModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}