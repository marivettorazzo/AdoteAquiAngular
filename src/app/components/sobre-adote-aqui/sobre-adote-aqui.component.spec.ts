/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SobreAdoteAquiComponent } from './sobre-adote-aqui.component';

describe('SobreAdoteAquiComponent', () => {
  let component: SobreAdoteAquiComponent;
  let fixture: ComponentFixture<SobreAdoteAquiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreAdoteAquiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreAdoteAquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
