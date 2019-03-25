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
  constructor(private route: ActivatedRoute, private service: ServiceService) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.showId = id;

    // (1)
    this.service.getEpisodes(this.showId).subscribe( search2 => {
      this.episodes = search2;
      console.log(this.episodes);
    });

  }

}
