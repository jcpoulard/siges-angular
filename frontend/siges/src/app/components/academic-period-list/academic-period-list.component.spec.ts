import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicPeriodListComponent } from './academic-period-list.component';

describe('AcademicPeriodListComponent', () => {
  let component: AcademicPeriodListComponent;
  let fixture: ComponentFixture<AcademicPeriodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicPeriodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicPeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
