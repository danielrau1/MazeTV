import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../models/service.service';
import {Router} from '@angular/router';
import {Show} from '../../models/show';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.sass']
})
export class ShowsComponent implements OnInit {

  keyWords = '';
  shows: Show[];

  // clicked = false; showClicked = ''; // (A.1) parameters: IGNORE


  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
  }


  // (1.1) When click on the Search Shows button, transmit the keywords to the service getShows function which will fetch the JSON of the
  // shows containng the keywords, and the searchShows function will put that JSON into the shows object
  searchShows() {
    console.log(this.keyWords);
    this.service.getShows(this.keyWords).subscribe( search1 => {
      this.shows = search1;
      console.log(this.shows); // For verification to see what obtained
    });
  }

  // (1.3) goToSeasons uses the show id of the show and uses the router.navigate to send that id to the episodes
  // component and open that component
  goToSeasons(show) {
    this.router.navigate(['/episodes', show.show.id]);
  }

  // #region "A.1" - Alternative version - IGNORE
  // For the alternative version **********
  // moreInfo(show) {
  //   this.clicked = !this.clicked;
  //   this.showClicked = show.show.id;
  //   console.log('showClicked: ' + this.showClicked + 'clicked: ' + this.clicked);
  // }
// #endregion "A.1"
}
