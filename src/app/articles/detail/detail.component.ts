import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'articles-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //passed from outside to modalRef, -1 to create new entry
  private itemIndex:number=-1;
  public entry: any=[];

  constructor(public entriesService: EntriesService, protected activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if(this.itemIndex>=0){
      this.entry=this.entriesService.csvRecords[this.itemIndex];
    }

  }

  saveClicked(formData: any){

    //if no index is passed a new entry is generated
    let isNewEntry: boolean = this.itemIndex==-1;

    let index:number=0;

    this.entriesService.headerItems?.forEach((item: any) => {
      this.entry[item]=formData["input_"+ index];
      index++;
    });

    if(isNewEntry){
      this.entriesService.addEntry(this.entry);
    }else{
      this.entriesService.updateEntry();
    }

    this.entry=[];
    this.activeModal.dismiss();
  }

  cancel(){
    this.activeModal.dismiss();
  }

}
