import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { StoryPointsComponent } from './components/storypoints/storypoints.component';
import { CodeQualityComponent } from './components/codequality/codequality.component';
import { AssistsComponent } from './components/assists/assists.component';
import { KudosComponent } from './components/kudos/kudos.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { TestTicketsComponent } from './components/testtickets/testtickets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StoryPointsComponent,
    CodeQualityComponent,
    AssistsComponent,
    KudosComponent,
    LeaderboardComponent,
    TestTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
