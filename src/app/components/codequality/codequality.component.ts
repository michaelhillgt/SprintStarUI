import { Component, OnInit } from '@angular/core';
import {SprintDataService} from '../../services/SprintData/sprint-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-codequality',
  templateUrl: './codequality.component.html',
  styleUrls: ['./codequality.component.sass']
})
export class CodeQualityComponent implements OnInit {
  
  public data: string[]

  constructor(private _sprintData: SprintDataService,
              private _router: Router) { }

  ngOnInit() {
    if (!this._sprintData.getActiveTeam()) {
    this._router.navigate(['/home'])
  } else {
    
    this._sprintData.getCodeQuality().subscribe(
      resp => {
        this.data = resp.message;
        console.log(resp.message)
      },
      err => console.log(err)
    )
    
  }
    
  }

}
