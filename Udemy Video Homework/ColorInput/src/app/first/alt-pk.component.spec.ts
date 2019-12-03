import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltPkComponent } from './alt-pk.component';

describe('AltPkComponent', () => {
  let component: AltPkComponent;
  let fixture: ComponentFixture<AltPkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltPkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltPkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
