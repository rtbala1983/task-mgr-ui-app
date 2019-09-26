import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponentComponent } from './view-task-component.component';

describe('ViewTaskComponentComponent', () => {
  let component: ViewTaskComponentComponent;
  let fixture: ComponentFixture<ViewTaskComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTaskComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
