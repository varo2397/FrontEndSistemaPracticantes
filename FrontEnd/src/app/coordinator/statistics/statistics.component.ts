import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StatisticsService } from '../../core/http/statistics/statistics.service';
import { Chart } from 'chart.js';
import { SemestersService } from '../../core/http/semesters/semesters.service';
import { Semester } from '../../interfaces/semester';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  @ViewChild('canvas', {static: true}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  chart: Chart;
  semesters: Semester[];

  constructor(private statisticsService: StatisticsService,
              private semestersService: SemestersService) { }

  ngOnInit() {

    this.getSemesters();
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    this.chart = new Chart( this.context , {
      type: 'pie',
      data: {
        datasets: [{
          data: [50, 20, 10],
          backgroundColor: [
            'blue',
            'red',
            'gray'
          ]
        }],
        labels: [
          'Masculino',
          'Femenino',
          'Otro'
        ]
      }
    });
  }

  getSemesters() {
    this.semestersService.getSemesters().subscribe(response => {
      this.semesters = <Semester[]>response.data;
    });
  }

  getPeoplePerSemester() {
    this.statisticsService.getPeoplePerSemester().subscribe(response => {
      console.log(response);
    });
  }

}
