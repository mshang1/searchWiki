import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
//import { SearchwikiComponent } from './searchwiki/searchwiki.component';

import { SearchService } from './search.service';
import { SearchgiphyService } from './searchgiphy.service';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    //SearchwikiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [SearchService, SearchgiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
