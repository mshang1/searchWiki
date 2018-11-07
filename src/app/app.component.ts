import { Component, Input } from '@angular/core';
import { SearchService } from './search.service';
import { Http } from '@angular/http';
import { SearchgiphyService } from './searchgiphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchWiki';
  searchText: string;
  searchResult: any;
  searchList: string[];
  searchGiphyList: string[]; 
  history: string[];
  imageUrl: string;
  require: any;

  constructor (private http: Http,
    private searchService: SearchService,
    private searchgiphyService: SearchgiphyService) 
  {
    this.searchResult = "";
  }

  searchWiki(searchText:string) {
    console.log("App searching " + searchText + " ...");
    console.log(this.searchService.searchwiki(this.searchText));
    //this.searchService.addWikiTime();
    this.searchService.searchwiki(this.searchText)
    .map(
      (value)=>{
        return value['query']['search'];
      }
    )
    .subscribe(
      (value) => {
        console.log(value);
        this.searchList = value;
        console.log('searchText searchText searchText searchText');
        console.log(searchText);
        console.log('searchText searchText searchText searchText');
        this.searchService.addWikiTerm(this.searchText);
        console.log(this.searchList);
        //this.searchService.addWikiTime();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchGiphy(searchText:string) {
    console.log("App searching giphy" + searchText + " ...");
    console.log(this.searchgiphyService.searchgiphy(this.searchText));
    this.searchgiphyService.searchgiphy(this.searchText)
    .map(
      (value)=>{
        return value['data'];//['query']['search'];
      }
    )
    .subscribe(
      (value) => {
        console.log(value);
        this.searchGiphyList = value;
        console.log(this.searchGiphyList);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getHis() {
   console.log(this.searchService.getHistory());
  }

}
