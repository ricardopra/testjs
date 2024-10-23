import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TemperatureController } from './temperature.controller';

@Module({
  imports: [],
  controllers: [AppController, TemperatureController],
  providers: [],
})
export class AppModule {}
