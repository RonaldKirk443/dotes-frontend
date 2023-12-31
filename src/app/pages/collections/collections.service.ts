import { Injectable } from '@angular/core';
import {AuthService} from "../../auth/services/auth.service";
import {HttpClient} from "@angular/common/http";
import {Collection} from "../../models/collection";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  id : number = 0;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.id = this.authService.getLocalId();
  }

  getCollections() {
    return this.http.get<Collection[]>("https://крымскаяягода.рус:443/api/collection/userId/" + this.id.toString());
  }

  updateCollection(collection: Collection) {
    return this.http.put<Collection>("https://крымскаяягода.рус:443/api/collection/update", collection);
  }

  addCollection(collection: Collection) {
    return this.http.post<Collection>("https://крымскаяягода.рус:443/api/collection/add/" + this.id.toString(), collection);
  }

  deleteCollection(collection: Collection) {
    return this.http.delete("https://крымскаяягода.рус:443/api/collection/delete/" + collection.id, { responseType: 'text' });
  }
}
