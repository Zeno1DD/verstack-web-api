import { Controller, Post, Body, Get } from '@nestjs/common';
import { FormsService } from './forms.service';
import { CreateEntryDto, EntryDto } from './dto';

@Controller('forms')
export class FormsController {
  constructor(private readonly formService: FormsService) {}

  @Post()
  async create(@Body() createEntryDto: CreateEntryDto): Promise<EntryDto> {
    return this.formService.create(createEntryDto);
  }

  @Get()
  async findAll(): Promise<EntryDto[]> {
    return this.formService.getAllPosts();
  }
}