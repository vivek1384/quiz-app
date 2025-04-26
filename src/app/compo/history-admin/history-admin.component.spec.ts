import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAdminComponent } from './history-admin.component';

describe('HistoryAdminComponent', () => {
  let component: HistoryAdminComponent;
  let fixture: ComponentFixture<HistoryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
