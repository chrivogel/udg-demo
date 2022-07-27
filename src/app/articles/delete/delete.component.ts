import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EntriesService } from '../entries.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  public itemIndex: number = -1;
  public isDeleting: boolean = false;

  constructor(
    protected activeModal: NgbActiveModal,
    private entriesService: EntriesService
  ) {}

  ngOnInit(): void {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(): void {
    this.isDeleting = true;
    setTimeout(item=>{
      this.entriesService.deleteEntry(this.itemIndex);
      this.activeModal.close('deleted');
    }, 500)
  }

}
