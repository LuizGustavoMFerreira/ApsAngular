import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomarComponent } from './somar.component';

describe('SomarComponent', () => {
  let component: SomarComponent;
  let fixture: ComponentFixture<SomarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
