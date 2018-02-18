import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ExpencesService} from "../../service/expences.service";
import {EuroPipe} from "../../pipe/euro.pipe";
import {ExpenseValue} from "../../model/expense.model";
import {Filter} from "../../ui/date-filter/date-filter.model";
import * as moment from "moment";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html
})
export class DashboardComponent implements OnInit {

  @ViewChild('c') chartElem: ElementRef;

  chart: Chart;
  filter = new Filter();

  constructor(private expService: ExpencesService, private euro: EuroPipe) {
  }

  ngOnInit() {
    this.setDate(-6, 'M');
  }

  setDate(amount: number, unit: string) {
    this.filter.from = moment().add(amount, unit).toDate();
    this.filter.to = new Date();
    this.filter.group = 'MONTH';
    this.filter.alias = amount + unit;

    this.expService.values(this.filter).subscribe(this.drawChart.bind(this));
  }

  drawChart(data: ExpenseValue[]) {
    let labels = data.map(v => v.date);
    let values = data.map(v => v.value);

    if(!this.chart) {
      this.chart = new Chart(this.chartElem.nativeElement, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: '€',
            data: values,
            backgroundColor: '#0667d050',
            borderColor: '#0667d0',
          }]
        },
        options: {
          tooltips: {
            intersect: false
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                  'day': 'MMM YY',
                  'week': 'MM/YY',
                  'month': 'YYYY',
                  'year': 'MM/YY'
                }
              },
              gridLines: {
                drawOnChartArea: false
              },
              ticks:{
                fontColor: '#7C94B3'
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 6,
                fontColor: '#7C94B3'
              }
            }]
          }
        }
      });
    } else {
      console.log('update chart');
      this.chart.data.labels = labels;
      this.chart.data.datasets[0].data = values;
      this.chart.update();
    }

  }

}
