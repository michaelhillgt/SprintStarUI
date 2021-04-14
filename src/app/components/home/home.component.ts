import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {SprintDataService} from '../../services/SprintData/sprint-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  public teams: string[]
  
  constructor(private _sprintData: SprintDataService,
              private _router: Router) {
  }

  ngOnInit() {
    this.getTeams()
  }
  
  getTeams() {
    this._sprintData.getTeams().subscribe(
      resp => {
        this.teams = resp.message;
      },
      err => console.log(err)
    )
  }
  
  initialize() {
    this._sprintData.initialize().subscribe(
      resp => {
        console.log(resp)
        this._router.navigate(['/storypoints'])
      },
      err => console.log(err)
    )
  }
  
  
  selectTeam(event) {
    event.preventDefault()
    const target = event.target
    this._sprintData.setActiveTeam(target.querySelector('#team_selection').value)
    this.initialize()
    
  }

}
