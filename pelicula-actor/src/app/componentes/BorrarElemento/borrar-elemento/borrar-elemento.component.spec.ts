import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarElementoComponent } from './borrar-elemento.component';

describe('BorrarElementoComponent', () => {
  let component: BorrarElementoComponent;
  let fixture: ComponentFixture<BorrarElementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarElementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarElementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
