import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPointsComponent } from './storypoints.component';

describe('StorypointsComponent', () => {
  let component: StorypointsComponent;
  let fixture: ComponentFixture<StorypointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorypointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorypointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
