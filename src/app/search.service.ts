import { Injectable, Input } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions
  } from '@angular/http';
  import { Observable, Subject } from 'rxjs';
  import 'rxjs/Rx';
  import { environment } from '../environments/environment';
  import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {
  searchText: string;
  searchQuery: string;
  base: string;
  suffix: string;
  searchHistory: Subject<string>;
  history: string[];
  searchTime: Subject<string>;
  timeList: string[];

  constructor(private httpClient:HttpClient) {
      this.base = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=';
      this.suffix = '&origin=*&format=json';
      this.searchHistory = new Subject<string>();
      this.history = [];
      this.searchHistory.subscribe((data) => {
        // console.log('GET HISTORY 33333');
        // console.log(data);
        // console.log('GET HISTORY');
        this.history.push(data);
      });
      // this.searchTime.subscribe((data) => {
      //     this.timeList.push(data);
      //   }
      // );
  }

  searchwiki(searchText:string): Observable<any> {
    this.searchQuery = `${this.base}${searchText}${this.suffix}`;
    return this.httpClient.get(this.searchQuery);
  }

  getHistory() {
    console.log('GET HISTORY');
    return this.searchHistory;
  }

  addWikiTerm(text: string) {
    this.searchHistory.next(text + " at time: " + Date());
    //this.searchTime.next(Date.now().toString());
  }

  // addWikiTime() {
  //   console.log(Date.now().toString());
  //   const t = Date.now().toString();
  //   this.searchTime.next(t);
  // }
}