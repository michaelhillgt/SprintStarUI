import { Component, OnInit } from '@angular/core';
import {SprintDataService} from '../../services/SprintData/sprint-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assists',
  templateUrl: './assists.component.html',
  styleUrls: ['./assists.component.sass']
})
export class AssistsComponent implements OnInit {
  
  public data: string[]

  constructor(private _sprintData: SprintDataService,
              private _router: Router) { }

  ngOnInit() {
    
    if (!this._sprintData.getActiveTeam()) {
    this._router.navigate(['/home'])
  } else {
    this._sprintData.getAssists().subscribe(
      resp => {
        this.data = resp.message;
        console.log(resp.message)
      },
      err => console.log(err)
    )
  }
    
  }

}
