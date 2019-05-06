import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RecordsListComponent } from './records-list/records-list.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';
import { AlbumService } from './albums.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [RecordsListComponent, RecordDetailComponent],
  providers: [AlbumService]
})
export class RecordsModule { }
