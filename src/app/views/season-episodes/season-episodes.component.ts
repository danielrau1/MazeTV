import { Component, OnInit, Input } from '@angular/core';
import {ServiceService} from '../../models/service.service';
import {MatSort, MatSortable, MatTableDataSource} from '@angular/material';
import {Episode} from '../../models/episode';


@Component({
  selector: 'app-season-episodes',
  templateUrl: './season-episodes.component.html',
  styleUrls: ['./season-episodes.component.sass']
})
export class SeasonEpisodesComponent implements OnInit {

  // @Input() public seasonId;
  seasonId = 9726;
  seasonEpisodes: Episode[];
  date: any;

  displayColumns = ['name', 'number'];
  dataSource;
  constructor(private service: ServiceService) {
  }

  ngOnInit() {
//  To get the episodes of a season
//     this.service.getSeasonEpisodes(this.seasonId).subscribe(search5 => {
//       this.seasonEpisodes = search5;
//       console.log(this.seasonEpisodes);
//
//       // Put the airdate and airtime together - Trial
//       for (let i = 0; i < this.seasonEpisodes.length; i++) {
//         this.seasonEpisodes[i].dt = this.seasonEpisodes[i].airdate + 'T' + this.seasonEpisodes[i].airtime;
//         this.date = new Date(this.seasonEpisodes[i].dt);
//         this.seasonEpisodes[i].timeDiff = this.date - Date.now();
//         if (this.seasonEpisodes[i].timeDiff < 0) {this.seasonEpisodes[i].dec = true; } else {this.seasonEpisodes[i].dec = false; }
//       }
//
//     });


    this.service.getSeasonEpisodes(this.seasonId).subscribe(results => {
      this.dataSource = new MatTableDataSource(results);
    });
}
}
