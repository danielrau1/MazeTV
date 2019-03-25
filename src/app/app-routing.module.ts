import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowsComponent} from './views/shows/shows.component';
import {EpisodesComponent} from './views/episodes/episodes.component';

const routes: Routes = [
  {path: 'shows', component: ShowsComponent},
  {path: 'episodes/:id', component: EpisodesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
