import { Injectable } from '@nestjs/common';
import { EntryDto, CreateEntryDto } from './dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class FormsService {
  private readonly collectionName = 'form_entries';

  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEntryDto: CreateEntryDto): Promise<EntryDto> {
    const db = await this.databaseService.getDB();
    const entry = {
      ...createEntryDto,
      createdAt: new Date(),
    };
    
    const result = await db.collection(this.collectionName).insertOne(entry);
    return {
      _id: result.insertedId.toString(),
      ...createEntryDto,
      createdAt: Math.floor(entry.createdAt.getTime() / 1000),
    };
  }

  async getAllPosts(): Promise<EntryDto[]> {
    const db = await this.databaseService.getDB();
    const entries = await db
      .collection(this.collectionName)
      .find()
      .sort({ createdAt: -1 })
      .toArray();
  
    return entries.map(entry => {
      const { _id, createdAt, content, form_id,  ...rest } = entry;
      return {
        _id: _id.toString(),
        ...rest,
        content,
        form_id,
        createdAt: Math.floor(createdAt.getTime() / 1000),
      };
    });
  }
}