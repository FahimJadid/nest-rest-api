import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '2522352352',
      name: 'Item one',
      description: 'Item one',
      quantity: 100,
    },
    {
      id: '45353445',
      name: 'Item 2',
      description: 'Item 2',
      quantity: 200,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
