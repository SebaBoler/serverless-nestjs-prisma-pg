import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongModule } from './song/song.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), SongModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
