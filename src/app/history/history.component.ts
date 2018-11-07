import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyResults: string[];
 // historyTime: any[];

  constructor(private router: Router,
    private searchService: SearchService) {
    //  this.historyResults = searchService.getHistory();
   // this.historyResults = searchService.getSearchHistory();
   this.historyResults = [];
   //this.historyTime = [];
   }

   getHistory() {
    console.log("Getting history ...");
    
    // render this to dom
    this.historyResults = this.searchService.history;
    //this.histotyTime = this.searchService.timeList;
    // console.log(this.searchService.getHistory());
    // this.searchService.getHistory()
    // .map(
    //   (value)=>{
    //     return value;//['query']['search'];
    //   }
    // )
    // .subscribe(
    //   (value) => {
    //     this.historyResults = value;
    //     console.log('value 5959595959');
    //     console.log(value);
    //     console.log('value');
    //     //this.searchGiphyList = value;
    //     //console.log(this.searchGiphyList);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // console.log(this.historyResults);
     
   }

  back() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
