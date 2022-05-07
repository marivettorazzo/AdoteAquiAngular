/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TermoTutelaComponent } from './termo-tutela.component';

describe('TermoTutelaComponent', () => {
  let component: TermoTutelaComponent;
  let fixture: ComponentFixture<TermoTutelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermoTutelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermoTutelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
