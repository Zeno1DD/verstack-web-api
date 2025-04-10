// form.module.ts
import { Module } from '@nestjs/common';
import { FormsService } from './forms.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [FormsService],
  exports: [FormsService],
})
export class FormsModule {}