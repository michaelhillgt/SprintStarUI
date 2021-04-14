import { Component, OnInit } from '@angular/core';
import {SprintDataService} from '../../services/SprintData/sprint-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-kudos',
  templateUrl: './kudos.component.html',
  styleUrls: ['./kudos.component.sass']
})
export class KudosComponent implements OnInit {
  
  public data: string[]

  constructor(private _sprintData: SprintDataService,
              private _router: Router) { }

  ngOnInit() {
    
    if (!this._sprintData.getActiveTeam()) {
    this._router.navigate(['/home'])
  } else {
    this._sprintData.getKudos().subscribe(
      resp => {
        this.data = resp.message;
        console.log(resp.message)
      },
      err => console.log(err)
    )
  }
  }
}
