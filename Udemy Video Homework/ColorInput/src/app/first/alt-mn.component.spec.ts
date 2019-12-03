import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltMnComponent } from './alt-mn.component';

describe('AltMnComponent', () => {
  let component: AltMnComponent;
  let fixture: ComponentFixture<AltMnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltMnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltMnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
