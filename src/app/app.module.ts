import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowsComponent } from './views/shows/shows.component';
import { EpisodesComponent } from './views/episodes/episodes.component';
import {MatExpansionModule} from '@angular/material';
import {MatTableModule, MatSortModule} from '@angular/material';
import { SeasonEpisodesComponent } from './views/season-episodes/season-episodes.component';
import { EpisodeComponent } from './models/episode/episode.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    EpisodesComponent,
    SeasonEpisodesComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
