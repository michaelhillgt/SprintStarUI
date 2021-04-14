import { Component, OnInit } from '@angular/core';
import {SprintDataService} from '../../services/SprintData/sprint-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-storypoints',
  templateUrl: './storypoints.component.html',
  styleUrls: ['./storypoints.component.sass']
})
export class StoryPointsComponent implements OnInit {
  
  private data: string[]

  constructor(private _sprintData: SprintDataService,
              private _router: Router) { }

  ngOnInit() {
    
    if (!this._sprintData.getActiveTeam()) {
    this._router.navigate(['/home'])
  } else {
    
    this._sprintData.getStoryPoints().subscribe(
      resp => {
        this.data = resp.message;
        console.log(resp.message)
        console.log(this.data)
      },
      err => console.log(err)
    )
    
  }
    
  }

}
