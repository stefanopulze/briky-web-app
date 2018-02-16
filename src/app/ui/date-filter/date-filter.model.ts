
export class Filter {

  group: string;
  from: Date;
  to: Date;


  constructor() {
    this.group = 'MONTH';
    this.from = new Date(2016, 0,1);
  }
}
