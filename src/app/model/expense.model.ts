import {Tag} from "./tag.model";

export class ExpenseValue {

  date: Date;
  value: number;

}

export class Expense {

  id: number;
  value: number;
  latitude: number;
  longitude: number;
  accuracy: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  tags: Tag[];

}
