export class CreateEntryDto {
  form_id: string;
  content: object;
}

export class EntryDto extends CreateEntryDto {
  _id: string;
  createdAt: number;
}

export class ListEntriesDto {
  id: string
  content: object
}