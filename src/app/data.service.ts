import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { 
    
  }

  getRepositorybyName(repoName: string, readMe? : boolean) {
    let url  = 'https://api.github.com/search/repositories?q=';
    url = url + repoName + (readMe===true ? "+in:readme" : "");

    return this.http.get(url);
  }
}
