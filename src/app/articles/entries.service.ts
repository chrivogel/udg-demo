import { Injectable } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { ChartConfiguration, ChartData } from 'chart.js';
import { ExportToCSV } from '@molteni/export-csv';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {

  itemChangeEmitter: EventEmitter<any> = new EventEmitter();
  importingData: boolean = false;
  csvRecords : any= [];
  headerItems: Array<string>;
  fileName: string ="";

  constructor(private ngxCsvParser: NgxCsvParser) {}

  //csv-import works with any data from table
  //table header is required to generate field-names
  importCSVFile(file:File){

    if(file){
      this.importingData=true;
      this.fileName=file.name;
      this.csvRecords=[];
      this.headerItems=[];
    }

    this.ngxCsvParser.parse(file, { header:true, delimiter: ';' })
    .pipe().subscribe({
      next: (result): void => {
        this.csvRecords = result;

        if(this.csvRecords.length>0){
          this.headerItems = Object.keys(this.csvRecords[0]);
        }

        this.importingData=false;
      },
      error: (error: NgxCSVParserError): void => {
        this.importingData=false;
      }
    });
  }

  exportCSVFile(){
    var exporter = new ExportToCSV();
    exporter.exportAllToCSV(this.csvRecords, this.fileName);
  }

  //delete, add, update entry
  //generating new csvRecords instance is required to update entryList (changeDetection onPush)
  deleteEntry(index: number):void{
    this.csvRecords.splice(index, 1);
    let newArray: Array<any>=[...this.csvRecords];
    this.csvRecords=newArray;
    this.itemChangeEmitter.emit({type: 'deleted', index: index});
  }

  addEntry(article: any):void{
    let newArray: Array<any>=[article, ...this.csvRecords];
    this.csvRecords=newArray;
    this.itemChangeEmitter.emit({type: 'added'});
  }

  updateEntry(){
    let newArray: Array<any>=[...this.csvRecords];
    this.csvRecords=newArray;
  }

  getEntryChangeEmitter() {
    return this.itemChangeEmitter;
  }

  //generates dropdown items for chart selection
  //column is only added to chart-view if there are less than 200 unequal entries
  getChartSelection(): Array<String>  {

    let chartSelection: Array<String>=[];

    this.headerItems.forEach(
      (item: string)=>{
        let itemsFoud: any = this.getChartData(item).labels;

        if(itemsFoud?.length<=200){
          chartSelection.push(item);
        };
      }
    )

    return chartSelection;
  }

  //key=column name
  getChartData(key: string) : any{
    let chartData: any=[];
    let labels: Array<string>=[];
    let pieChartData: ChartData<'bar', number[], string | string[]>;

    this.csvRecords.forEach(
      (article:any) => {

          if(chartData[article[key]]==undefined || chartData[article[key]]==NaN){
            chartData[article[key]]=0;
          }

          chartData[article[key]]++;
      }
    )

    pieChartData = {
        labels:  Object.keys(chartData),
        datasets: [ {
          data: Object.values(chartData), label: key
        } ]
    };

    return pieChartData;
  }


}
