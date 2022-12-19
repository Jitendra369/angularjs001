import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookpitComponent } from './cookpit.component';

describe('CookpitComponent', () => {
  let component: CookpitComponent;
  let fixture: ComponentFixture<CookpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookpitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
