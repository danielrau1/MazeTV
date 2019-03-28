import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from '../../models/service.service';
import {MatSort, MatSortable, MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-season-episodes',
  templateUrl: './season-episodes.component.html',
  styleUrls: ['./season-episodes.component.sass']
})
export class SeasonEpisodesComponent implements OnInit {

  @Input() public seasonId; // (2.2.1) the transmitted season id from epiodes component
  seasonEpisodes: any;

  // date: any; // (A.2) parameters: IGNORE

  constructor(private service: ServiceService) {
  }

  ngOnInit() {
 // (2.2.2) Immediately get the episodes of the season id and put the fetched JSON into the seasonEpisodes object
    this.service.getSeasonEpisodes(this.seasonId).subscribe(search5 => {
      this.seasonEpisodes = search5;
      console.log(this.seasonEpisodes);
      // #region "A.2" : IGNORE
      // Put the airdate and airtime together - Trial
      // for (let i = 0; i < this.seasonEpisodes.length; i++) {
      //   this.seasonEpisodes[i].dt = this.seasonEpisodes[i].airdate + 'T' + this.seasonEpisodes[i].airtime;
      //   this.date = new Date(this.seasonEpisodes[i].dt);
      //   this.seasonEpisodes[i].timeDiff = this.date - Date.now();
      //   if (this.seasonEpisodes[i].timeDiff < 0) {this.seasonEpisodes[i].dec = true; } else {this.seasonEpisodes[i].dec = false; }
      // }
      // #endregion "A.2"
    });



}
}
