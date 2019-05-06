import { Injectable } from "@angular/core";

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Album } from "../models/Album";

@Injectable()
export class AlbumService {
  recordsCollection: AngularFirestoreCollection<any>;
  recordsDocument: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.recordsCollection = this.afs.collection("records");
  }

  getData(): Observable<any[]> {
    // ['added', 'modified', 'removed']
    return this.recordsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Album;
          return { id: a.payload.doc.id, ...data };
        });
      })
    );
  }

  getRecord(id: string) {
    return this.afs.doc<any>(`records/${id}`);
  }

  createRecord(album: Album) {
    return this.recordsCollection.add(album);
  }

  updateRecord(id: string, data: any) {
    return this.getRecord(id).update(data);
  }

  deleteRecord(id: string) {
    return this.getRecord(id).delete();
  }
}
