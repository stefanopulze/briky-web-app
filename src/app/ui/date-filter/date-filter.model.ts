
export class Filter {

  alias: string;
  group: string;
  from: Date;
  to: Date;

  tags: number[];
  start: number = 0;
  size: number = 25;

  sort: string[];

  constructor() {
    this.group = 'MONTH';
    this.from = new Date(2016, 0,1);
  }
}
