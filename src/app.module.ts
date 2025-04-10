import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsController } from './forms/forms.controller';
import { DatabaseModule } from './database/database.module';
import { FormsModule } from './forms/forms.module';

@Module({
  imports: [DatabaseModule, FormsModule],
  controllers: [AppController, FormsController],
  providers: [AppService],

})
export class AppModule { }
