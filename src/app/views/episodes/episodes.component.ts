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

episodes = [];
seasons = [];
seasonClicked = '';
clicked2 = false;

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.showId = id;



    // (1) To get the episodes immediately when click on show
    // this.service.getEpisodes(this.showId).subscribe( search2 => {
    //   this.episodes = search2;
    //   console.log(this.episodes);
    // });

    //(2) To get the seasons when click on button of the show
    this.service.getSeasons(this.showId).subscribe( search3 => {
      this.seasons = search3;
      console.log(this.seasons);
    });

  }

  // (3) Get the episodes of a certain season
  showEpisodes(season){
  this.seasonClicked = season.number;
  this.clicked2 = !this.clicked2;

  this.service.getEpisodes(this.showId).subscribe( search4 => {
    this.episodes = search4;
    console.log(this.episodes);
      });

  }

}

