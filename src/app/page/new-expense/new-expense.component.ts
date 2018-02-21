import { Component, OnInit } from '@angular/core';
import {AiService} from "../../service/ai.service";

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.scss']
})
export class NewExpenseComponent implements OnInit {

  constructor(private ai: AiService) { }

  ngOnInit() {
  }

  tryParse(query: string) {
    this.ai.query(query).subscribe(data => {
      console.log(data);
    });

    return false;
  }
}
