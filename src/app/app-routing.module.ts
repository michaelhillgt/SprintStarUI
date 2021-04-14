import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import {HomeComponent} from './components/home/home.component';
import {StoryPointsComponent} from './components/storypoints/storypoints.component';
import {CodeQualityComponent} from './components/codequality/codequality.component';
import {AssistsComponent} from './components/assists/assists.component';
import {KudosComponent} from './components/kudos/kudos.component';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';
import {TestTicketsComponent} from './components/testtickets/testtickets.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'storypoints', component: StoryPointsComponent},
  {path: 'testtickets', component: TestTicketsComponent},
  {path: 'codequality', component: CodeQualityComponent},
  {path: 'assists', component: AssistsComponent},
  {path: 'kudos', component: KudosComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: "**",redirectTo:"home"}
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
