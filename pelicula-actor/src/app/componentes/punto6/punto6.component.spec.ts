import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto6Component } from './punto6.component';

describe('Punto6Component', () => {
  let component: Punto6Component;
  let fixture: ComponentFixture<Punto6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Punto6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
