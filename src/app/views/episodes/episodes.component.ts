import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceService} from '../../models/service.service';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {

  public showId; // (1.3)

episodes: any;
seasons: any;
seasonClicked = '';
clicked2 = false;


time: Date = new Date();
diff: any;
date: any;
nextEpisode = '';

public name = 'Daniel';

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {
    // (1.3) Catch the id of the show which was chosen in the shows.components.html and put it into the local showId parameter
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.showId = id;



    // (2) Immediately as the episodes component opens
    this.service.getSeasons(this.showId).subscribe( search3 => {
      this.seasons = search3;
    });

  }

  // (2.1) When click showEpisodes make the appropriate assignment for the 2 values like this can select a season,
  // invike the getEpisodes from the service, and count the time until the next episode
  showEpisodes(season) {
  this.seasonClicked = season.number;
  this.clicked2 = !this.clicked2;

  // (2.1.1) Invoke the getEpisodes from the service to get all the episodes and put them into the episodes object
    // But the click function parameters described above will control that only the episodes of the season clicked are shwon
  this.service.getEpisodes(this.showId).subscribe( search4 => {
    this.episodes = search4;



    // (2.1.2)For the time to the next episode
    for (let i = 0; i < this.episodes.length; i++) {
      const day = this.episodes[i].airdate;
      const t = this.episodes[i].airtime;
      this.date = new Date(day + 'T' + t);
      this.diff = this.date - Date.now();
      if (this.diff > 0) {
        const sec = Math.floor((this.diff) / 1000);
        const days = Math.floor(sec / 86400);
        const hours = Math.floor((sec % 86400) / 3600) ;
        const minutes = Math.floor(((sec % 86400) % 3600) / 60);
        const seconds = ((sec % 86400) % 3600) % 60;
        this.nextEpisode = 'Next Episode: ' + this.episodes[i].airdate + ' ' + this.episodes[i].airtime + ' Time left: ' +
          'days: ' + days + ' hours: ' + hours + ' minutes: ' + minutes + ' seconds: ' + seconds;
        break;
      }
    }
      });





  }

}

