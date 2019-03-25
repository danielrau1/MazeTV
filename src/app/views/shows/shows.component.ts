import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../models/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  keyWords: string = '';
  shows = [];

  clicked = false;
  showClicked = '';

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
  }

  searchShows() {
    console.log(this.keyWords);
    this.service.getShows(this.keyWords).subscribe( search1 => {
      this.shows = search1;
      console.log(this.shows);
    });

  }

  // (1)
  goToEpisodes(show) {
    this.router.navigate(['/episodes', show.show.id]);
  }

  moreInfo(show){
    this.clicked = !this.clicked;
    this.showClicked = show.show.id;
    console.log('showClicked: ' + this.showClicked + 'clicked: ' + this.clicked);
  }

}
