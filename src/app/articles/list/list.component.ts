import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { EntriesService } from '../entries.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from '../delete/delete.component';
import { DetailComponent } from '../detail/detail.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Subscription } from 'rxjs';

@Component({
  selector: 'article-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent implements OnInit {

  @Input()
  listData: any[]=[];


  @ViewChild(CdkVirtualScrollViewport) virtualViewport: CdkVirtualScrollViewport;

  private selectedIndex: number = -1;
  private entryChangeSubscription: Subscription;

  constructor(public entriesService: EntriesService, protected modalService: NgbModal) {
  }


  ngOnInit(): void {
    this.entryChangeSubscription=this.entriesService.getEntryChangeEmitter().subscribe(data=>{
      switch(data.type){
        case 'added':
        setTimeout(item=>
          {;
            this.virtualViewport.scrollTo({
              top: 0,
              behavior: 'auto',
            })
          }, 200);
          break;
          case 'deleted':

              setTimeout(item=>
                {
                  if(item.index >= 0){
                    this.virtualViewport.scrollToIndex(item.index);
                  }

                }, 200);


            break;
      }

    })
  }

  deleteEntryClicked(itemIndex: any){
    const modalRef = this.modalService.open(DeleteComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.itemIndex = itemIndex;
  }

  editEntryClicked(itemIndex: number){
    const modalRef = this.modalService.open(DetailComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.itemIndex = itemIndex;
  }

  ngOnDestroy(){
    this.entryChangeSubscription.unsubscribe();
  }

}
