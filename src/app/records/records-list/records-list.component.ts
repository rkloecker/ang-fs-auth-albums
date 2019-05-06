import { Component, OnInit } from "@angular/core";
import { AlbumService } from "../albums.service";
import { Observable } from "rxjs";
import { AuthService } from "src/app/core/auth.service";
import { Album } from "../../models/Album";

@Component({
  selector: "records-list",
  templateUrl: "./records-list.component.html",
  styleUrls: ["./records-list.component.css"]
})
export class RecordsListComponent implements OnInit {
  album: Album = {
    title: "",
    artist: "",
    year: null,
    rating: null,
    label: "",
    user: null
  };

  btntxt: string = "Add Album";
  theEditAlbumId: string = null;
  editMode: boolean = false;
  albums: Observable<Album[]>;
  user: any;

  constructor(private albumService: AlbumService, public auth: AuthService) {}

  ngOnInit() {
    this.albums = this.albumService.getData();
    this.auth.user.subscribe(user => (this.user = user));
  }

  resetForm() {
    this.album.artist = "";
    this.album.year = null;
    this.album.rating = null;
    this.album.label = "";
    this.album.title = "";
    this.album.user = null;
  }

  onSubmit() {
    if (this.album.title != "" && this.album.artist != "") {
      // add user from auth
      this.album.user = this.user;
      if (this.editMode) {
        this.albumService.updateRecord(this.theEditAlbumId, this.album);
      } else {
        this.albumService.createRecord(this.album);
      }
      this.resetForm();
      this.editMode = false;
      this.btntxt = "Add Album";
      this.theEditAlbumId = null;
    }
  }

  setAlbumToEdit(albumToEdit) {
    this.editMode = true;
    this.btntxt = "Update Album";
    this.theEditAlbumId = albumToEdit.id;
    this.album.artist = albumToEdit.artist;
    this.album.year = albumToEdit.year;
    this.album.rating = albumToEdit.rating;
    this.album.label = albumToEdit.label;
    this.album.title = albumToEdit.title;
  }
}
