import { Component, OnInit } from '@angular/core';
import { EntriesService } from './articles/entries.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './articles/detail/detail.component';
import { ChartComponent } from './articles/chart/chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public entriesService: EntriesService, protected modalService: NgbModal) { }

  public isMenuCollapsed = true;

  ngOnInit(): void {

  }

  fileChangeListener($event: any): void {
    const files = $event.srcElement.files;
    this.entriesService.importCSVFile(files[0]);
    this.isMenuCollapsed=true;
  }

  createEntryClicked(){
    const modalRef = this.modalService.open(DetailComponent, { size: 'lg', backdrop: 'static' });
    this.isMenuCollapsed=true;
  }

  showChart(){
    const modalRef = this.modalService.open(ChartComponent, { size: 'xl' });
    this.isMenuCollapsed=true;
  }

  saveCSVClicked(){
   this.entriesService.exportCSVFile();
   this.isMenuCollapsed=true;
  }
}
