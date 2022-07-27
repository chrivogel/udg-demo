import { Component, ViewChild, OnInit } from '@angular/core';
import { EntriesService } from '../entries.service';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {

  readonly BARCHART: string = "Balken";
  readonly PIECHART: string = "Kreis";

  public pieChartData: any;
  public pieChartType: ChartType="bar";
  public dropdownTitle: string=this.BARCHART;
  public chartSelection: Array<String>=[];
  public selectedChartKey: string = "";

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  constructor(
    public entriesService: EntriesService,
    protected activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.chartSelection=this.entriesService.getChartSelection();

    if(this.chartSelection?.length>0){
      this.setChartData(this.chartSelection[0]);
    }

    this.setChartType("bar");

  }

  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  setChartData(key: any){
    this.selectedChartKey=key;
    this.pieChartData = this.entriesService.getChartData(key);
  }

  setChartType(chartType: any) {
    switch (chartType) {
      case 'pie':
        this.dropdownTitle = this.PIECHART;
        break;

      case 'bar':
        this.dropdownTitle = this.BARCHART;
        break;
    }

    this.pieChartType = chartType;
  }

  close() {
    this.activeModal.dismiss();
  }
}
