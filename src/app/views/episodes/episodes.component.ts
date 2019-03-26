import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ServiceService} from '../../models/service.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.sass']
})
export class EpisodesComponent implements OnInit {
public showId;

episodes: any;
seasons: any;
seasonClicked = '';
clicked2 = false;
time: Date = new Date();
diff: any;
date: any;
nextEpisode = '';

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.showId = id;



    // (1) To get the episodes immediately when click on show
    // this.service.getEpisodes(this.showId).subscribe( search2 => {
    //   this.episodes = search2;
    //   console.log(this.episodes);
    // });

    // (2) To get the seasons when click on button of the show
    this.service.getSeasons(this.showId).subscribe( search3 => {
      this.seasons = search3;
     // console.log(this.seasons);
    });

  }

  // (3) Get the episodes of a certain season
  showEpisodes(season) {
  this.seasonClicked = season.number;
  this.clicked2 = !this.clicked2;

  this.service.getEpisodes(this.showId).subscribe( search4 => {
    this.episodes = search4;
    // console.log(this.episodes);
    console.log('Break point 1');
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

