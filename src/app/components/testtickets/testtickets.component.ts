import { Component, OnInit } from '@angular/core';
import {SprintDataService} from '../../services/SprintData/sprint-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-testtickets',
  templateUrl: './testtickets.component.html',
  styleUrls: ['./testtickets.component.sass']
})
export class TestTicketsComponent implements OnInit {
  
  public data: string[]

  constructor(private _sprintData: SprintDataService,
              private _router: Router) { }

  ngOnInit() {
    
    if (!this._sprintData.getActiveTeam()) {
    this._router.navigate(['/home'])
  } else {
    this._sprintData.getTestTickets().subscribe(
      resp => {
        this.data = resp.message;
        console.log(resp.message)
      },
      err => console.log(err)
    )
  }
    
    
  }

}
