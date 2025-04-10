import { MongoClient, Db } from 'mongodb';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private client: MongoClient;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    await this.connect();
  }

  private async connect(): Promise<void> {
    const uri = `mongodb://${this.configService.get('database.user')}:${this.configService.get('database.password')}@${this.configService.get('database.ip')}:${this.configService.get('database.port')}/?authSource=admin&directConnection=true`;
    
    this.client = new MongoClient(uri);
    await this.client.connect();
    console.log('Database connected');
  }

  async getDB(name?: string): Promise<Db> {
    const dbName = name || this.configService.get('database.name') || "default_db";
    return this.client.db(dbName);
  }

  async close(): Promise<void> {
    await this.client?.close();
  }
}