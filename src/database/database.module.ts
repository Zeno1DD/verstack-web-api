import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from '../../config/database.config';
import { DatabaseService } from './database.service';

@Module({
  imports: [ConfigModule.forRoot({ load: [databaseConfig] })],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
