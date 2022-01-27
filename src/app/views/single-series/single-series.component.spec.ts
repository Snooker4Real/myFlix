import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSeriesComponent } from './single-series.component';

describe('SingleSeriesComponent', () => {
  let component: SingleSeriesComponent;
  let fixture: ComponentFixture<SingleSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
