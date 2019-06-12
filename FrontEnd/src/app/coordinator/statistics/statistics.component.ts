import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StatisticsService } from '../../core/http/statistics/statistics.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @ViewChild('canvas', {static: true}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  chart: Chart;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {

    // const ctx = this.canvasRef.nativeElement.getContext('2d');
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.chart = new Chart( this.context , {
      type: 'pie',
      data: {
        datasets: [{
          data: [10, 20, 30]
        }],
        labels: [
          'Masculino',
          'Femenino',
          'Otro'
        ]
      }
    });
  }


  getPeoplePerSemester() {
    this.statisticsService.getPeoplePerSemester().subscribe(response => {
      console.log(response);
    });
  }

}
