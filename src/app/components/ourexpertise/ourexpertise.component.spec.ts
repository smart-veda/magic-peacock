import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurexpertiseComponent } from './ourexpertise.component';

describe('OurexpertiseComponent', () => {
  let component: OurexpertiseComponent;
  let fixture: ComponentFixture<OurexpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurexpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurexpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
