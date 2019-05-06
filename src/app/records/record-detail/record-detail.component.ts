import { Component, Input, Output, EventEmitter } from "@angular/core";

import { AlbumService } from "../albums.service";
import { AuthService } from "src/app/core/auth.service";

@Component({
  selector: "record-detail",
  templateUrl: "./record-detail.component.html",
  styleUrls: ["./record-detail.component.scss"]
})
export class RecordDetailComponent {
  @Output() editChange = new EventEmitter();
  @Input() album: any;
  user: any;

  constructor(private albumService: AlbumService, public auth: AuthService) {}

  // ngOnInit() {
  //   this.auth.user.subscribe(user => this.user = user);
  // }

  deleteRecord(album: any, user: any) {
    if (album.user.uid == user.uid) {
      this.albumService.deleteRecord(album.id);
    }
  }

  editRecord(album: any, user: any) {
    if (album.user.uid == user.uid) {
      this.editChange.emit(album);
    }
  }
}
