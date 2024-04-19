import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffuserComponent } from './affuser.component';

describe('AffuserComponent', () => {
  let component: AffuserComponent;
  let fixture: ComponentFixture<AffuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
