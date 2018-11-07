import { Injectable, Input } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions
  } from '@angular/http';
  import { Observable } from 'rxjs';
  import 'rxjs/Rx';
  import { giphyBit } from '../environments/environment';
  import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchgiphyService {
  searchText: string;
  searchQuery: string;
  baseurl: string;
  suffix: string;
  gApiKey: string;
  giphyurl: string;

  constructor(private httpClient:HttpClient) {
      this.baseurl = 'https://api.giphy.com/v1/gifs/search?api_key=';
      this.gApiKey = giphyBit.giphyApiKey;
      this.suffix = '&limit=5&offset=0&rating=G&lang=en';
      //this.baseurl = `${https://api.giphy.com/v1/gifs/search?api_key=}[YOUR-API-KEY]&q=dog${&limit=5&offset=0&rating=G&lang=en}`;
  }

  searchgiphy(searchText:string): Observable<any> {
    this.searchQuery = `${this.baseurl}${this.gApiKey}&q=${searchText}${this.suffix}`;
    return this.httpClient.get(this.searchQuery);
  }
}