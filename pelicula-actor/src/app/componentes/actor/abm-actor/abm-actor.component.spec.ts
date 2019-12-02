import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmActorComponent } from './abm-actor.component';

describe('AbmActorComponent', () => {
  let component: AbmActorComponent;
  let fixture: ComponentFixture<AbmActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
