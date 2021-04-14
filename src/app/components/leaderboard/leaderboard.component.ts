import { Component, OnInit } from '@angular/core';
import {SprintDataService} from '../../services/SprintData/sprint-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.sass']
})
export class LeaderboardComponent implements OnInit {
  
  public data: string[]
  public awardData: string[]
  public starArray: string[]
  

  constructor(private _sprintData: SprintDataService,
              private _router: Router) { }

  ngOnInit() {
    
    if (!this._sprintData.getActiveTeam()) {
    this._router.navigate(['/home'])
  } else {
    
    this._sprintData.getAward().subscribe(
      resp => {
        this.awardData = resp.message;
        console.log(resp.message)
        this.populateLeaderBoard()
      
      },
      err => console.log(err)
    )
  }
  }
  
  populateLeaderBoard(): void {
    this._sprintData.getLeaderBoard().subscribe(
      resp => {
        this.data = resp.message;
        console.log(resp.message)
      },
      err => console.log(err)
    )
  }
  

}
