/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PermmisionsComponent } from './permmisions.component';

describe('PermmisionsComponent', () => {
  let component: PermmisionsComponent;
  let fixture: ComponentFixture<PermmisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermmisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermmisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
