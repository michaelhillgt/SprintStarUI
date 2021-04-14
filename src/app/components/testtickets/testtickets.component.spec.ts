import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestticketsComponent } from './testtickets.component';

describe('TestTicketsComponent', () => {
  let component: TestticketsComponent;
  let fixture: ComponentFixture<TestticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
