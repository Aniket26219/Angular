import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterCompCommuUsingServicesComponent } from './inter-comp-commu-using-services.component';

describe('InterCompCommuUsingServicesComponent', () => {
  let component: InterCompCommuUsingServicesComponent;
  let fixture: ComponentFixture<InterCompCommuUsingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterCompCommuUsingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterCompCommuUsingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
