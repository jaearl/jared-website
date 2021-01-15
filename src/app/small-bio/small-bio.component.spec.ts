import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBioComponent } from './small-bio.component';

describe('SmallBioComponent', () => {
  let component: SmallBioComponent;
  let fixture: ComponentFixture<SmallBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
