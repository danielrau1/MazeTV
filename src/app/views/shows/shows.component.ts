import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../models/service.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  keyWords: string = '';
  shows = [];
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  searchShows() {
    console.log(this.keyWords);
    this.service.getShows(this.keyWords).subscribe( search1 => {
      this.shows = search1;
      console.log(this.shows);
    });

  }

}
