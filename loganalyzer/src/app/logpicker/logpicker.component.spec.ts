import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogpickerComponent } from './logpicker.component';

describe('LogpickerComponent', () => {
  let component: LogpickerComponent;
  let fixture: ComponentFixture<LogpickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogpickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogpickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
